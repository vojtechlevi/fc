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
        className=" text-white w-full h-screen relative flex flex-col justify-center "
      >
        <div className=" relative bg-[rgb(30,30,30)] w-[90%] mx-auto flex justify-center items-center my-10 p-10 rounded-[20px]">
          <img
            src={placeholder}
            alt=""
            srcset=""
            className=" w-[200px] hidden rounded-[20px] md:flex md:mx-5"
          />
          <div className=" flex flex-col">
            <h2 className=" font-bold text-center text-lg md:text-2xl md:text-left">
              Vilka är vi?
            </h2>
            <p className=" mt-5 text-center text-xs max-w-[450px] md:max-w-[400px] md:text-left">
              Vårt fokus ligger starkt på restaurangkök, och genom åren har vi
              utvecklats till en mångsidig verksamhet som levererar till både
              stora och små företag inom alla sektorer. Med över tio års
              erfarenhet har vi vuxit till att bli en pålitlig och stabil aktör
              på marknaden. Vi tror på att bygga långsiktiga partnerskap och ser
              fram emot att samarbeta med dig för att stödja och utveckla ditt
              affärsområde.
            </p>
          </div>
        </div>
        <Test />
        <div className=" bg-[rgb(30,30,30)] w-[90%] mx-auto flex justify-center items-center my-10 p-10 rounded-[20px]">
          <div className="w-full text-center">
            <h2 className=" font-bold text-lg md:text-2xl">
              Varför ska ni välja oss?
            </h2>
            <div className="flex mt-5 w-full justify-around">
              <div>
                <div class=" flex items-center justify-center text-center gap-4">
                  <IoPricetagOutline className=" text-lg text-green-400" />
                  <p className=" font-bold">Prisvärt</p>
                </div>
                <p className="text-xs hidden mt-1 md:flex md:max-w-[200px]">
                  Konkurrenskraftiga priser för kvalitativa produkter, stödjer
                  din verksamhet ekonomiskt.
                </p>
              </div>
              <div className="">
                <div class=" flex items-center justify-center text-center gap-4">
                  <LuBarChartBig className=" text-lg text-red-400" />
                  <p className=" font-bold">Flexibelt</p>
                </div>
                <p className="text-xs hidden md:flex md:max-w-[200px]">
                  Små eller stora, standard eller special. Vi anpassar oss efter
                  dina behov.
                </p>
              </div>
              <div className="">
                <div class=" flex items-center justify-center text-center gap-4">
                  <RiCustomerService2Fill className=" text-lg text-orange-400" />
                  <p className=" font-bold">Service</p>
                </div>
                <p className="text-xs hidden md:flex md:max-w-[200px]">
                  Små eller stora, standard eller special - vi anpassar oss
                  efter dina behov.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
