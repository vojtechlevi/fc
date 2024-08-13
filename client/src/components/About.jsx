import React from "react";
import { IoPricetagOutline } from "react-icons/io5";
import { LuBarChartBig } from "react-icons/lu";
import { RiCustomerService2Fill } from "react-icons/ri";

function About() {
  return (
    <>
      <section className="relative w-full justify-around flex flex-col py-20">
        <div id="About" className="flex flex-col w-full px-6 ">
          <div className=" flex flex-col justify-center lg:flex-row gap-4">
            <div className=" flex flex-col gap-4 items-center text-center ">
              <h2 className=" font-bold text-2xl lg:text-2xl text-center ">
                Om oss
              </h2>
              <p className=" text-center text-md  max-w-[400px] ">
                Vårt fokus ligger starkt på restaurangkök, och genom åren har vi
                utvecklats till en mångsidig verksamhet som levererar till både
                stora och små företag inom alla sektorer. Med över tio års
                erfarenhet har vi vuxit till att bli en pålitlig och stabil
                aktör på marknaden. Vi tror på att bygga långsiktiga partnerskap
                och ser fram emot att samarbeta med dig för att stödja och
                utveckla ditt affärsområde.
              </p>
            </div>
            <div className="flex flex-col text-center items-center justify-center gap-4 scale-90">
              <h2 className=" font-bold text-lg ">Varför ska ni välja oss?</h2>
              <div className="grid grid-cols-2 gap-4 ">
                <div>
                  <div className="flex justify-center items-center">
                    <RiCustomerService2Fill className=" text-sm text-orange-400 md:text-lg" />
                    <p className=" font-bold text-xs ml-1 md:text-lg">
                      Service
                    </p>
                  </div>
                  <p className="text-xs max-w-[200px] mt-1 md:flex md:max-w-[200px] ">
                    Vårt team är alltid redo att hjälpa dig. Från beställning
                    till leverans, vi ser till att du får en smidig och pålitlig
                    service varje gång.
                  </p>
                </div>

                <div>
                  <div className="mt-6 flex justify-center items-center">
                    <LuBarChartBig className=" text-sm text-red-400 md:text-lg" />
                    <p className=" font-bold text-xs ml-1 md:text-lg">
                      Flexibelt
                    </p>
                  </div>
                  <p className="text-xs max-w-[200px] mt-1 md:flex md:max-w-[200px] ">
                    Liten eller stor, standard eller special. Vi anpassar oss
                    efter dina behov.
                  </p>
                </div>
                <div className="col-span-2 flex flex-col items-center justify-center text-center">
                  <div className=" flex items-center">
                    <IoPricetagOutline className=" text-sm text-green-400 md:text-lg" />
                    <p className=" font-bold text-xs ml-2 md:text-lg">
                      Prisvärt
                    </p>
                  </div>
                  <p className="text-xs max-w-[200px] mt-1 md:flex md:max-w-[200px] ">
                    Vi erbjuder konkurrenskraftiga priser utan att tumma på
                    kvaliteten.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="  w-[95%] lg:w-[80%] mx-auto flex justify-center items-center mb-10 py-10 px-1 rounded-[20px]">
          <div className="w-full text-center flex flex-col h-full ">
            <h2 className=" font-bold text-md md:text-2xl">
              Varför ska ni välja oss?
            </h2>
            <div className="flex flex-col gap-4 items-center md:items-start md:flex-row  mt-5 w-full justify-around h-full">
              <div className="bg-gradient-to-b from-transparent from-80% to-[rgb(20,20,20)] p-10 rounded-[20px]">
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
              <div className="bg-gradient-to-b from-transparent from-80% to-[rgb(20,20,20)] p-10 rounded-[20px]">
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
              <div className="bg-gradient-to-b from-transparent from-80% to-[rgb(20,20,20)] p-10 rounded-[20px] h-fit">
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
        </div> */}
      </section>
    </>
  );
}

export default About;
