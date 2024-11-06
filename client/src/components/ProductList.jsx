import { useEffect, useContext, useState } from "react";

import supabase from "../utils/supabaseClient";
import UserContext from "../utils/userContext";
import { useCart } from "../utils/cartContext";
import { Apple } from "lucide-react";

const ProductList = () => {
  const { user } = useContext(UserContext);
  const { addToCart, cartItems } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUnits, setSelectedUnits] = useState({});
  const [quantities, setQuantities] = useState({});
  const [errorMessages, setErrorMessages] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

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

        // Fetch pricing overrides from campaign_product
        const { data: campaignData, error: campaignError } = await supabase
          .from("campaign")
          .select("product_id, price");

        if (campaignError) {
          console.error("Error fetching campaign products:", campaignError);
          return;
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

        const campaignMap = campaignData.reduce((map, item) => {
          map[item.product_id] = item.price;
          return map;
        }, {});

        // Step 6: Merge the products with pricing overrides
        const productsWithOverriddenPrices = products.map((product) => {
          const overridePrice =
            agreementMap[product.id] ||
            pricelistMap[product.id] ||
            campaignMap[product.id] ||
            product.price;
          const isCampaign = !!campaignMap[product.id];
          return { ...product, price: overridePrice, isCampaign };
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

  const filteredProducts = products
    .filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (selectedCategory === "" || product.category === selectedCategory) &&
        (selectedSubCategory === "" ||
          product.subcategory === selectedSubCategory) &&
        product.status
    )
    .sort((a, b) => {
      const categoryComparison = a.category.localeCompare(b.category, "sv");
      if (categoryComparison !== 0) {
        return categoryComparison;
      }
      const subCategoryComparison = a.subcategory.localeCompare(
        b.subcategory,
        "sv"
      );
      if (subCategoryComparison !== 0) {
        return subCategoryComparison;
      }
      return a.name.localeCompare(b.name, "sv");
    });

  const categories = [
    ...new Set(products.map((product) => product.category)),
  ].sort((a, b) => b.length - a.length);
  const subCategories = selectedCategory
    ? [
        ...new Set(
          products
            .filter((product) => product.category === selectedCategory)
            .map((product) => product.subcategory)
        ),
      ].sort((a, b) => a.localeCompare(b))
    : [];

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="w-full p-2 rounded-lg md:w-1/6 text-black">
          <input
            type="text"
            placeholder="Sök produkter..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="mb-4 w-full p-2 border rounded-md text-[10px] outline-none text-black"
          />
          <button
            className="md:hidden text-white p-2 rounded-lg mb-4 bg-green-400"
            onClick={() => setIsModalOpen(true)}
          >
            Kategorier
          </button>
          <div className="hidden md:block">
            <h3 className="text-base font-bold mb-4">Kategorier</h3>
            <ul className="text-base">
              <li
                className={`cursor-pointer mb-2 2xl:text-xl ${
                  selectedCategory === "" ? "font-semibold" : ""
                }`}
                onClick={() => {
                  setSelectedCategory("");
                  setSelectedSubCategory("");
                }}
              >
                Alla
              </li>
              {categories.map((category) => (
                <div key={category}>
                  <li
                    className={`cursor-pointer mb-2 hover:underline ${
                      selectedCategory === category ? "font-semibold" : ""
                    }`}
                    onClick={() => {
                      setSelectedCategory(category);
                      setSelectedSubCategory("");
                    }}
                  >
                    {category}
                  </li>
                  {selectedCategory === category && (
                    <ul className="text-sm">
                      {subCategories.map((subcategory) => (
                        <li
                          key={subcategory}
                          className={`cursor-pointer mb-2 hover:underline ${
                            selectedSubCategory === subcategory
                              ? "font-semibold"
                              : ""
                          }`}
                          onClick={() => setSelectedSubCategory(subcategory)}
                        >
                          {subcategory}
                        </li>
                      ))}
                      <div className="w-full h-[1px] bg-gray-400 mb-4"></div>
                    </ul>
                  )}
                </div>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full pl-0 md:pl-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 ">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-lg rounded-lg max-w-full relative"
              >
                <Apple
                  className="absolute top-2 right-2 cursor-pointer"
                  size={12}
                />
                {product.isCampaign && (
                  <span className="absolute z-10 p-1 top-2 left-2 bg-red-500 text-white text-[0.5rem] rounded font-bold">
                    Kampanj
                  </span>
                )}
                <img
                  src={product.image_url || "/placeholder.jpg"}
                  alt={product.name}
                  className="h-24 w-full object-contain p-2 rounded-t-lg drop-shadow-lg"
                />
                <div className="w-full h-[1px] bg-gray-300 mb-2 relative flex">
                  <span className="absolute left-1 -top-[5px] text-[6px] text-red-500 bg-white px-1">
                    test
                  </span>
                </div>
                <div className="px-4 pb-4">
                  <h3 className="text-[10px] text-black w-full font-semibold">
                    {product.name}
                  </h3>
                  <p className="text-green-600 font-bold text-[12px] mb-2">
                    {product.price} kr / {product.priceunit}
                  </p>
                  <p className="text-black text-[7px] h-8">
                    {product.description}
                  </p>

                  <div className="mb-2 flex w-full gap-2 ">
                    <input
                      type="number"
                      min="0"
                      value={quantities[product.id] || 1}
                      onChange={(e) =>
                        handleQuantityChange(product.id, e.target.value)
                      }
                      className="pl-2 w-full text-[10px] border text-black rounded outline-none"
                    />
                    <select
                      value={selectedUnits[product.id] || product.unit[0]}
                      onChange={(e) =>
                        handleUnitChange(product.id, e.target.value)
                      }
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
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-4 w-full max-w-md mx-auto">
            <h3 className="text-lg font-bold mb-4">Kategorier</h3>
            <ul className="text-sm">
              <li
                className={`cursor-pointer mb-2 ${
                  selectedCategory === "" ? "font-semibold" : ""
                }`}
                onClick={() => {
                  setSelectedCategory("");
                  setIsModalOpen(false);
                }}
              >
                Alla
              </li>
              {categories.map((category) => (
                <li
                  key={category}
                  className={`cursor-pointer mb-2 ${
                    selectedCategory === category ? "font-semibold" : ""
                  }`}
                  onClick={() => {
                    setSelectedCategory(category);
                    setIsModalOpen(false);
                  }}
                >
                  {category}
                </li>
              ))}
            </ul>
            {selectedCategory && (
              <>
                <h4 className="text-sm font-bold mt-4 mb-2">Underkategorier</h4>
                <ul className="text-sm">
                  <li
                    className={`cursor-pointer mb-2 ${
                      selectedSubCategory === "" ? "font-semibold" : ""
                    }`}
                    onClick={() => {
                      setSelectedSubCategory("");
                      setIsModalOpen(false);
                    }}
                  >
                    Alla
                  </li>
                  {subCategories.map((subcategory) => (
                    <li
                      key={subcategory}
                      className={`cursor-pointer mb-2 ${
                        selectedSubCategory === subcategory
                          ? "font-semibold"
                          : ""
                      }`}
                      onClick={() => {
                        setSelectedSubCategory(subcategory);
                        setIsModalOpen(false);
                      }}
                    >
                      {subcategory}
                    </li>
                  ))}
                </ul>
              </>
            )}
            <button
              className="mt-4 bg-red-500 text-white p-2 rounded-lg w-full"
              onClick={() => setIsModalOpen(false)}
            >
              Stäng
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductList;
