import React from "react";
import { IoPricetagOutline } from "react-icons/io5";
import { LuBarChartBig } from "react-icons/lu";
import { RiCustomerService2Fill } from "react-icons/ri";

import Test from "./Test";
import placeholder from "../assets/Unknown.png";

function About() {
  return (
    <>
      <div
        id="About"
        className=" bg-[rgb(24,24,24)] text-white w-full justify-around flex flex-col py-20"
      >
        <div className=" relative justify-center mx-auto flex px-4 rounded-[20px] md:mb-12">
          <img
            src={placeholder}
            alt=""
            srcset=""
            className=" w-[300px] hidden rounded-[20px] md:flex md:mx-5"
          />
          <div className=" flex flex-col">
            <h2 className=" font-bold text-center text-lg md:text-2xl md:text-left">
              Vilka är vi?
            </h2>
            <p className=" mt-5 text-center text-sm  md:max-w-[400px] md:text-left">
              Vårt fokus ligger starkt på restaurangkök, och genom åren har vi
              utvecklats till en mångsidig verksamhet som levererar till både
              stora och små företag inom alla sektorer. Med över tio års
              erfarenhet har vi vuxit till att bli en pålitlig och stabil aktör
              på marknaden. Vi tror på att bygga långsiktiga partnerskap och ser
              fram emot att samarbeta med dig för att stödja och utveckla ditt
              affärsområde.
            </p>
            <button className="bg-green-300 text-black w-[80px] p-2 m-4 rounded-lg mx-auto md:mx-0 md:mt-6 text-sm">
              Läs mer
            </button>
          </div>
        </div>
        <div className=" bg-[rgb(30,30,30)] w-[95%] lg:w-[80%] mx-auto flex justify-center items-center mb-10 py-10 px-1 rounded-[20px]">
          <div className="w-full text-center">
            <h2 className=" font-bold text-md md:text-2xl">
              Varför ska ni välja oss?
            </h2>
            <div className="flex mt-5 w-full justify-around">
              <div>
                <div class=" flex items-center justify-center text-center">
                  <IoPricetagOutline className=" text-sm text-green-400 md:text-lg" />
                  <p className=" font-bold text-xs ml-2 md:text-lg">Prisvärt</p>
                </div>
                <p className="text-[8px] max-w-[100px] mt-1 md:flex md:max-w-[200px] md:text-sm">
                  {/* Konkurrenskraftiga priser för kvalitativa produkter, stödjer
                  din verksamhet ekonomiskt. */}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam, impedit?
                </p>
              </div>
              <div className="">
                <div class=" flex items-center justify-center text-center">
                  <LuBarChartBig className=" text-sm text-red-400 md:text-lg" />
                  <p className=" font-bold text-xs ml-1 md:text-lg">
                    Flexibelt
                  </p>
                </div>
                <p className="text-[8px] max-w-[100px] mt-1 md:flex md:max-w-[200px] md:text-sm">
                  {/* Små eller stora, standard eller special. Vi anpassar oss efter
                  dina behov. */}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam, impedit?
                </p>
              </div>
              <div className="">
                <div class=" flex items-center justify-center text-center">
                  <RiCustomerService2Fill className=" text-sm text-orange-400 md:text-lg" />
                  <p className=" font-bold text-xs ml-1 md:text-lg">Service</p>
                </div>
                <p className="text-[8px] max-w-[100px] mt-1 md:flex md:max-w-[200px] md:text-sm">
                  {/* Små eller stora, standard eller special - vi anpassar oss
                  efter dina behov. */}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam, impedit?
                </p>
              </div>
            </div>
            <Test />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
