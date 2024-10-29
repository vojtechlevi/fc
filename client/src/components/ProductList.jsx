import { useEffect, useContext, useState } from "react";

import supabase from "../utils/supabaseClient";
import UserContext from "../utils/userContext";
import { useCart } from "../utils/cartContext";

const ProductList = () => {
  const { user } = useContext(UserContext);
  const { addToCart, cartItems } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUnits, setSelectedUnits] = useState({});
  const [quantities, setQuantities] = useState({});
  const [errorMessages, setErrorMessages] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Step 1: Fetch the customer's pricelist and agreement IDs
        const { data: customer, error: customerError } = await supabase
          .from("customers")
          .select("pricelist_id, agreement_id")
          .eq("auth_id", user?.id)
          .single();

        if (customerError || !customer) {
          console.error("Error fetching customer:", customerError);
          return;
        }

        const { pricelist_id, agreement_id } = customer;

        // Step 2: Fetch all products
        const { data: products, error: productsError } = await supabase
          .from("products")
          .select("*");

        if (productsError) {
          console.error("Error fetching products:", productsError);
          return;
        }

        // Step 3: Fetch pricing overrides from pricelist_product only if pricelist_id is meaningful
        let pricelistProducts = [];

        // Only fetch if pricelist_id is not the default
        const { data, error: pricelistError } = await supabase
          .from("pricelist_product")
          .select("product_id, price")
          .eq("pricelist_id", pricelist_id);

        if (pricelistError) {
          console.error("Error fetching pricelist products:", pricelistError);
          return;
        }

        pricelistProducts = data;

        // Step 4: Fetch pricing overrides from agreement_product if agreement_id exists
        let agreementProducts = [];
        if (agreement_id) {
          const { data, error: agreementError } = await supabase
            .from("agreement_product")
            .select("product_id, price")
            .eq("agreement_id", agreement_id);

          if (agreementError) {
            console.error("Error fetching agreement products:", agreementError);
            return;
          }
          agreementProducts = data;
        }

        // Step 5: Create mappings for quick lookup
        const pricelistMap = pricelistProducts.reduce((map, item) => {
          map[item.product_id] = item.price;
          return map;
        }, {});

        const agreementMap = agreementProducts.reduce((map, item) => {
          map[item.product_id] = item.price;
          return map;
        }, {});

        // Step 6: Merge the products with pricing overrides
        const productsWithOverriddenPrices = products.map((product) => {
          const overridePrice =
            agreementMap[product.id] ||
            pricelistMap[product.id] ||
            product.price;
          return { ...product, price: overridePrice };
        });

        setProducts(productsWithOverriddenPrices);
      } catch (err) {
        console.error("Unexpected error:", err);
      } finally {
        setLoading(false);
      }
    };

    if (user?.id) {
      fetchProducts();
    }
  }, [user]);

  const handleUnitChange = (productId, unit) => {
    setSelectedUnits((prev) => ({ ...prev, [productId]: unit }));
  };

  const handleQuantityChange = (productId, quantity) => {
    setQuantities((prev) => ({ ...prev, [productId]: quantity }));
  };

  const handleAddToCart = (product) => {
    const unit = selectedUnits[product.id] || product.unit[0];
    const quantity = quantities[product.id] || 1;

    // Check if the product already exists in the cart
    const existingItem = cartItems.find(
      (item) => item.id === product.id && item.unit === unit
    );

    if (!existingItem) {
      addToCart({ ...product, unit, quantity });
      setErrorMessages((prev) => ({ ...prev, [product.id]: "" }));
    } else {
      setErrorMessages((prev) => ({
        ...prev,
        [product.id]: ` ${product.name} finns redan i varukorgen`,
      }));
    }
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <input
        type="text"
        placeholder="Sök produkter..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mb-4 p-2 border rounded-lg text-xs outline-none text-black"
      />
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 ">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg max-w-full"
          >
            <img
              src={product.image_url || "/placeholder.jpg"}
              alt={product.name}
              className="h-24 w-full object-contain p-2 rounded-t-lg"
            />
            <div className="px-4 pb-4">
              <h3 className="text-[12px] text-black w-full font-semibold">
                {product.name}
              </h3>
              <p>{product.description}</p>
              <p className="text-[6px] text-gray-500 mb-2">
                Kategori: {product.category}
              </p>
              <p className="text-green-600 font-bold mb-2">
                {product.price} kr / {product.unit[0]}
              </p>

              <div className="mb-2 flex gap-4">
                <input
                  type="number"
                  min="1"
                  value={quantities[product.id] || 1}
                  onChange={(e) =>
                    handleQuantityChange(product.id, e.target.value)
                  }
                  className="pl-2 text-[10px] border text-black rounded w-full outline-none"
                />
                <select
                  value={selectedUnits[product.id] || product.unit[0]}
                  onChange={(e) => handleUnitChange(product.id, e.target.value)}
                  className="p-2 text-[10px] border text-black rounded outline-none"
                >
                  {product.unit.map((unit) => (
                    <option key={unit} value={unit}>
                      {unit}
                    </option>
                  ))}
                </select>
              </div>

              {errorMessages[product.id] && (
                <p className="text-red-500 text-[6px] mt-2">
                  {errorMessages[product.id]}
                </p>
              )}

              <button
                onClick={() => handleAddToCart(product)}
                className="bg-green-500 w-full text-white text-[10px] p-2 mt-2 rounded"
              >
                Lägg till i varukorgen
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
