import React, { useState, useEffect } from "react";
import { createClient } from "contentful";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AtSign, Phone } from "lucide-react";

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
      <div id="Home" className="text-black snap-end">
        <div className="relative w-full h-96 mx-auto flex flex-col justify-center lg:items-start bg-gradient-to-b from-transparent from-75% to-white">
          <div className="lg:ml-20 text-center lg:text-start justify-center">
            <h1 className="text-4xl lg:text-8xl font-bold tracking-wide">
              Kontakt
            </h1>
            <p>
              Växel:
              <a
                className="hover:text-gray-400 text-lg ml-2"
                href="tel:031225690"
              >
                +46 31 22 56 90
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-14 xl:grid-cols-4 my-32">
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
            <div className="bg-black h-12 w-full"></div>
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
      <Footer />
    </>
  );
};

export default Contact;
