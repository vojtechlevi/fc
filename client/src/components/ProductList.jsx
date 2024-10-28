import { useEffect, useState } from "react";

import supabase from "../utils/supabaseClient";
import { useCart } from "../utils/cartContext";

const ProductList = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from("products").select("*");

      if (error) {
        console.error("Error fetching products:", error);
      } else {
        setProducts(data);
        console.log(data);
      }

      setLoading(false);
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 p-2">
      {products.map((product) => (
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
            <p className="text-[6px] text-gray-500 mb-2">
              Kategori: {product.category}
            </p>
            <p className="text-green-600 font-bold mb-2">
              {product.price} kr / {product.unit}
            </p>

            <button
              onClick={() => addToCart(product)}
              className="bg-green-500 text-white text-[12px] p-2 mt-2 rounded"
            >
              Lägg till i varukorgen
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
