import React from "react";
import { Link } from "react-router-dom";
import FallingElementsPage from "./FallingElements";
function FoodCategories() {
  return (
    <>
      <div
        id="food-categories"
        className="z-10 text-white relative snap-end my-24  flex flex-col items-center justify-center lg:gap-2  mx-auto   px-2  lg:px-16 lg:h-screen"
      >
        <FallingElementsPage />
        <div className="2xl:scale-[2] items-center flex flex-col">
          <div className="text-center  mt-8 items-center flex flex-col gap-4">
            <h1 className="text-2xl md:text-5xl font-bold z-10 pointer-events-none">
              En värld av smaker för alla kök
            </h1>
            <h2 className="lg:w-[500px] ">
              Utforska vårt breda sortiment som täcker allt från snabbmat till
              gourmetmåltider. Vi har något för varje restaurangkoncept.
            </h2>
            <Link
              to="/sortiment"
              className="px-3 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition-colors duration-300 ease-in-out"
            >
              Upptäck vårt sortiment
            </Link>
          </div>
          <div className="w-full mx-auto grid p-6 gap-4 grid-cols-1 md:grid-cols-6 ">
            {/* Gateway to Asia */}
            <div className="h-24 lg:h-52 relative p-6 md:rounded-tl-3xl md:col-span-3 flex flex-col justify-center overflow-hidden">
              <h2 className="text-xl font-bold mb-4 z-10 pointer-events-none">
                Gateway to Asia
              </h2>
              <p className="text-sm"></p>
              {/* <button className="mt-4 bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
            Läs mer
          </button> */}
              <img
                src="https://nzcmvlxhpsoqbubjnsyn.supabase.co/storage/v1/object/public/bilder/MicrosoftTeams-image-10.jpg"
                alt="Asian food"
                className="absolute inset-0 w-full h-full object-cover object-center "
              />
            </div>

            {/* Fastfood */}
            <div className="h-24 lg:h-52 relative  p-6  md:rounded-tr-3xl md:col-span-3 flex flex-col justify-center overflow-hidden ">
              <h2 className="text-xl font-bold mb-4 z-10 pointer-events-none">
                Fastfood
              </h2>
              <p className="text-sm"></p>
              {/* <button className="mt-4 bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Läs mer
          </button> */}
              <img
                src="https://nzcmvlxhpsoqbubjnsyn.supabase.co/storage/v1/object/public/bilder/MicrosoftTeams-image-7-1.jpg"
                alt="Fastfood"
                className="absolute inset-0 w-full h-full object-cover object-center "
              />
            </div>

            {/* Cocktails & Herbs */}
            <div className="h-24 md:h-40 relative  p-6 md:rounded-bl-3xl md:col-span-2 flex flex-col justify-center overflow-hidden">
              <h2 className="text-xl font-bold mb-4 z-10 pointer-events-none">
                Cocktails & Herbs
              </h2>
              <p className="text-sm"></p>
              {/* <button className="mt-4 bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Läs mer
          </button> */}
              <img
                src="https://nzcmvlxhpsoqbubjnsyn.supabase.co/storage/v1/object/public/bilder/MicrosoftTeams-image-8-1.jpg"
                alt="Cocktails"
                className="absolute inset-0 w-full h-full object-cover object-center "
              />
            </div>

            {/* Storkök & Schoolfood */}
            <div className="h-24 md:h-40 relative p-6 md:col-span-2 flex flex-col justify-center overflow-hidden">
              <h2 className="text-xl font-bold mb-4 z-10 pointer-events-none">
                Schoolfood
              </h2>
              <p className="text-sm"></p>
              {/* <button className="mt-4 bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Läs mer
          </button> */}
              <img
                src="https://nzcmvlxhpsoqbubjnsyn.supabase.co/storage/v1/object/public/bilder/MicrosoftTeams-image-16.jpg"
                alt="Schoolfood"
                className="absolute inset-0 w-full h-full object-cover object-center "
              />
            </div>

            {/* Lunch & Comfortfood */}
            <div className="h-24 md:h-40 relative  p-6 md:rounded-br-3xl md:col-span-2 flex flex-col justify-center overflow-hidden">
              <h2 className="text-xl font-bold mb-4 z-10 pointer-events-none">
                Lunch & Comfortfood
              </h2>
              <p className="text-sm"></p>
              {/* <button className="mt-4 bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Läs mer
          </button> */}
              <img
                src="https://nzcmvlxhpsoqbubjnsyn.supabase.co/storage/v1/object/public/bilder/MicrosoftTeams-image-12.jpg"
                alt="Comfortfood"
                className="absolute inset-0 w-full h-full object-cover object-center "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodCategories;
