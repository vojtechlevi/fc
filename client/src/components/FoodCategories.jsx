import React from "react";
import FallingElementsPage from "./FallingElements";
function FoodCategories() {
  return (
    <>
      <div
        id="food-categories"
        className="z-10 relative snap-end h-screen-navbar flex flex-col items-center justify-center gap-8 lg:gap-16 mx-auto   px-6  lg:px-16 lg:h-screen"
      >
        <FallingElementsPage />
        <div className=" w-[80%] mx-auto grid p-2 gap-4 grid-cols-1 md:grid-cols-6 text-white">
          {/* Gateway to Asia */}
          <div className="md:h-64 relative p-6 md:rounded-tl-3xl md:col-span-3 flex flex-col justify-center overflow-hidden">
            <h2 className="text-2xl font-bold mb-4 z-10 pointer-events-none">
              Gateway to Asia
            </h2>
            <p className="text-sm"></p>
            {/* <button className="mt-4 bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
            Läs mer
          </button> */}
            <img
              src="https://nzcmvlxhpsoqbubjnsyn.supabase.co/storage/v1/object/public/bilder/MicrosoftTeams-image-10.jpg"
              alt="Asian food"
              className="absolute aspect-video  inset-0 object-cover object-center  transition-all duration-300 ease-in-out "
            />
          </div>

          {/* Fastfood */}
          <div className="md:h-64 relative  p-6  md:rounded-tr-3xl md:col-span-3 flex flex-col justify-center overflow-hidden ">
            <h2 className="text-2xl font-bold mb-4 z-10 pointer-events-none">
              Fastfood
            </h2>
            <p className="text-sm"></p>
            {/* <button className="mt-4 bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Läs mer
          </button> */}
            <img
              src="https://nzcmvlxhpsoqbubjnsyn.supabase.co/storage/v1/object/public/bilder/MicrosoftTeams-image-7-1.jpg"
              alt="Fastfood"
              className="absolute  inset-0 object-cover object-center  transition-all duration-300 ease-in-out "
            />
          </div>

          {/* Cocktails & Herbs */}
          <div className="relative  p-6 md:rounded-bl-3xl md:col-span-2 flex flex-col justify-center overflow-hidden">
            <h2 className="text-2xl font-bold mb-4 z-10 pointer-events-none">
              Cocktails & Herbs
            </h2>
            <p className="text-sm"></p>
            {/* <button className="mt-4 bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Läs mer
          </button> */}
            <img
              src="https://nzcmvlxhpsoqbubjnsyn.supabase.co/storage/v1/object/public/bilder/MicrosoftTeams-image-8-1.jpg"
              alt="Cocktails"
              className="absolute  inset-0 object-cover object-center transition-all duration-300 ease-in-out "
            />
          </div>

          {/* Storkök & Schoolfood */}
          <div className="relative p-6 md:col-span-2 flex flex-col justify-center overflow-hidden">
            <h2 className="text-2xl font-bold mb-4 z-10 pointer-events-none">
              Schoolfood
            </h2>
            <p className="text-sm"></p>
            {/* <button className="mt-4 bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Läs mer
          </button> */}
            <img
              src="https://nzcmvlxhpsoqbubjnsyn.supabase.co/storage/v1/object/public/bilder/MicrosoftTeams-image-16.jpg"
              alt="Schoolfood"
              className="absolute  inset-0 object-cover object-center  transition-all duration-300 ease-in-out "
            />
          </div>

          {/* Lunch & Comfortfood */}
          <div className="md:h-40 relative  p-6 md:rounded-br-3xl md:col-span-2 flex flex-col justify-center overflow-hidden">
            <h2 className="text-2xl font-bold mb-4 z-10 pointer-events-none">
              Lunch & Comfortfood
            </h2>
            <p className="text-sm"></p>
            {/* <button className="mt-4 bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Läs mer
          </button> */}
            <img
              src="https://nzcmvlxhpsoqbubjnsyn.supabase.co/storage/v1/object/public/bilder/MicrosoftTeams-image-12.jpg"
              alt="Comfortfood"
              className="absolute  inset-0 object-fill object-center  transition-all duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodCategories;
