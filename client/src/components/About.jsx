import React from "react";
import { IoPricetagOutline } from "react-icons/io5";
import { LuBarChartBig } from "react-icons/lu";
import { RiCustomerService2Fill } from "react-icons/ri";

function About() {
  return (
    <>
      <div
        id="About"
        className=" text-white w-full justify-around flex flex-col py-20"
      >
        {/* <div className=" relative justify-center mx-auto flex px-4 rounded-[20px] md:mb-12">
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
        </div> */}
        <div className=" md:bg-gradient-to-b md:from-transparent md:from-80% md:to-[rgb(30,30,30)] w-[95%] lg:w-[80%] mx-auto flex justify-center items-center mb-10 py-10 px-1 rounded-[20px]">
          <div className="w-full text-center flex flex-col ">
            <h2 className=" font-bold text-md md:text-2xl">
              Varför ska ni välja oss?
            </h2>
            <div className="flex flex-col gap-4 items-center md:items-start md:flex-row  mt-5 w-full justify-around ">
              <div>
                <div className=" flex items-center justify-center text-center">
                  <IoPricetagOutline className=" text-sm text-green-400 md:text-lg" />
                  <p className=" font-bold text-xs ml-2 md:text-lg">Prisvärt</p>
                </div>
                <p className="text-xs max-w-[300px] mt-1 md:flex md:max-w-[200px] md:text-sm">
                  Vi erbjuder konkurrenskraftiga priser utan att tumma på
                  kvaliteten. Våra produkter är noga utvalda för att ge dig och
                  din restaurang bästa möjliga värde för pengarna.
                </p>
              </div>
              <div>
                <div className=" flex items-center justify-center text-center">
                  <LuBarChartBig className=" text-sm text-red-400 md:text-lg" />
                  <p className=" font-bold text-xs ml-1 md:text-lg">
                    Flexibelt
                  </p>
                </div>
                <p className="text-xs max-w-[300px] mt-1 md:flex md:max-w-[200px] md:text-sm">
                  Små eller stora, standard eller special. Vi anpassar oss efter
                  dina behov. Vi erbjuder flexibla leveransalternativ och
                  skräddarsydda lösningar för att passa just din verksamhet.
                </p>
              </div>
              <div>
                <div className=" flex items-center justify-center text-center">
                  <RiCustomerService2Fill className=" text-sm text-orange-400 md:text-lg" />
                  <p className=" font-bold text-xs ml-1 md:text-lg">Service</p>
                </div>
                <p className="text-xs max-w-[300px] mt-1 md:flex md:max-w-[200px] md:text-sm">
                  Vårt dedikerade team är alltid redo att hjälpa dig. Från
                  beställning till leverans, vi ser till att du får en smidig
                  och pålitlig service varje gång.
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
