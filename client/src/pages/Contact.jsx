import React, { useState, useEffect } from "react";
import { createClient } from "contentful";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AtSign, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [employees, setEmployees] = useState([]);

  const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_DELIVERY_TOKEN,
  });

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        const entries = await client.getEntries({ content_type: "employees" });
        console.log("Entries fetched:", entries);
        setEmployees(entries.items);
      } catch (error) {
        console.log("Error fetching entries:", error);
      }
    };
    getAllEntries();
  }, []);

  return (
    <>
      <Navbar />
      <div id="Home" className="text-black snap-end mt-20">
        <div className="relative w-full  py-12 bg- gap-12 mx-auto flex flex-col justify-center bg-gradient-to-b from-transparent from-75% to-white">
          {/* <img
            className="w-full h-full object-cover absolute top-0 left-0 -z-10 border-none  "
            src="https://nzcmvlxhpsoqbubjnsyn.supabase.co/storage/v1/object/public/bilder/farm.png?t=2024-11-14T12%3A41%3A38.458Z"
            alt="farm"
            loading="lazy"
          /> */}
          <div className=" text-center">
            <h1 className="text-4xl lg:text-6xl font-bold tracking-wide">
              Kontakta vårt team
            </h1>
            <p>Låt oss veta hur vi kan hjälpa till.</p>
          </div>
          <div className="flex flex-col lg:flex-row w-full items-center justify-center gap-12">
            <div className="relative h-48 w-72 rounded-lg border shadow-lg bg-white">
              <div className="absolute top-4 left-4 border p-2 rounded-md shadow-md">
                <MapPin size={16} />
              </div>
              <div className="h-full flex flex-col py-2 px-4 gap-2 text-xs text-gray-500 justify-end">
                <div className="h-24 flex flex-col justify-between">
                  <h3 className="text-base font-bold text-black">Besök oss</h3>
                  <p>Besök vårt kontor.</p>
                  <a
                    className=" hover:text-[#5C574F] text-sm text-black"
                    href="https://www.google.com/maps/place/Fruktcentralen+Sverige+AB/@57.7752768,11.9907631,17z/data=!3m2!4b1!5s0x464ff516768ef4a3:0x1d3d6ea9966035a6!4m6!3m5!1s0x464ff56ab64c9349:0x51dda2ad159a63a8!8m2!3d57.775274!4d11.993338!16s%2Fg%2F1hc3p_wm_?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D"
                  >
                    Google Maps
                  </a>
                </div>
              </div>
            </div>
            <div className="relative h-48 w-72 rounded-lg border shadow-lg bg-white">
              <div className="absolute top-4 left-4 border p-2 rounded-md shadow-md">
                <Phone size={16} />
              </div>
              <div className="h-full flex flex-col py-2 px-4 gap-1 text-xs text-gray-500 justify-end">
                <div className="h-24 flex flex-col justify-between">
                  <h3 className="text-base font-bold text-black">Ring oss</h3>
                  <p>Mån - Fre 06 - 18</p>
                  <p>Lördag 06 - 09</p>
                  <a
                    className=" hover:text-[#5C574F] text-sm text-black"
                    href="tel:031225690"
                  >
                    +46 31 22 56 90
                  </a>
                </div>
              </div>
            </div>
            <div className="relative h-48 w-72 rounded-lg border shadow-lg bg-white">
              <div className="absolute top-4 left-4 border p-2 rounded-md shadow-md">
                <Phone size={16} />
              </div>
              <div className="h-full flex flex-col py-2 px-4 gap-1 text-xs text-gray-500 justify-end">
                <div className="h-24 flex flex-col justify-between">
                  <h3 className="text-base font-bold text-black">
                    Söker du jobb?
                  </h3>
                  <p>Skicka en spontanansökan</p>
                  <a
                    className=" hover:text-[#5C574F] text-sm text-black"
                    href="mailto:jobb@fruktcentralen.se"
                  >
                    jobb@fruktcentralen.se
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-14 lg:px-12 xl:grid-cols-4 my-12 ">
          {employees.map((employee) => (
            <div
              key={employee.sys.id}
              className="mx-auto flex h-full w-fit max-w-full flex-col gap-6 min-w-72"
            >
              {/* <img
              src=""
              alt=""
              className="aspect-square rounded-lg object-cover object-center"
            /> */}
              <div className="bg-black h-6 w-full"></div>
              <div className="flex grow flex-col justify-between gap-6">
                <div>
                  <h3 className="text-xl font-semibold capitalize md:text-2xl">
                    {employee.fields.name}
                  </h3>
                  <p className="font-normal text-lg">{employee.fields.title}</p>
                  <a
                    className="flex items-center gap-2"
                    href="mailto:lk@fruktcentralen.se"
                  >
                    <AtSign size={16} />

                    <p className="font-normal text-base pb-[3px]">
                      {employee.fields.mail}
                    </p>
                  </a>
                  <a className="flex items-center gap-2" href="tel:031225690">
                    <Phone size={16} />

                    <p className="font-normal text-base pb-[3px]">
                      {employee.fields.phone}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
