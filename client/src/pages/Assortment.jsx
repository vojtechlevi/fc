import React, { useState, useEffect } from "react";

import supabase from "../utils/supabaseClient";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Assortment = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data: products, error: productsError } = await supabase
        .from("products_view")
        .select("*");

      if (productsError) {
        console.error("Error fetching products:", productsError);
        return;
      }

      setProducts(products);
      console.log(products);
    };

    fetchProducts();
  }, []);

  const filteredProducts = products
    .filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (selectedCategory === "" || product.category === selectedCategory) &&
        (selectedSubCategory === "" ||
          product.subcategory === selectedSubCategory)
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
      <Navbar />
      <div className="mt-32 px-4">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full p-2 rounded-lg lg:w-1/6 text-black">
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
            <div className="hidden lg:block">
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
                  <img
                    src={product.image_url || "/placeholder.jpg"}
                    alt={product.name}
                    className="h-36 w-full object-contain p-2 rounded-t-lg drop-shadow-lg"
                  />
                  <div className="w-full h-[1px] bg-gray-300 mb-2 relative flex"></div>
                  <div className="px-4 pb-4">
                    <h3 className="text-[10px] text-black w-full font-semibold">
                      {product.name}
                    </h3>
                    <p className="text-black text-[7px] h-8">
                      {product.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Assortment;
