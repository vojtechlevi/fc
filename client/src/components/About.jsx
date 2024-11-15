import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { IoPricetagOutline } from "react-icons/io5";
import { LuBarChartBig } from "react-icons/lu";
import { RiCustomerService2Fill } from "react-icons/ri";

function About() {
  return (
    <>
      <section
        id="about"
        className="snap-end   flex flex-col items-center justify-center gap-8 lg:gap-16 mx-auto my-24 max-w-[1440px] px-6 lg:my-36 lg:px-16 lg:h-screen"
      >
        <div className=" items-center mt-6 justify-items-center px-4 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10  ">
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <h2 className="text-4xl font-bold md:text-5xl">Om oss</h2>
            <article className="flex flex-col gap-4">
              <p>
                Vårt fokus starkt på att möta behoven hos restaurangkök och med
                över tio års erfarenhet i branschen har vi vuxit till en stabil
                och pålitlig aktör på marknaden. Vi förstår att varje kund är
                unik, och vi lägger stor vikt vid att bygga långsiktiga och
                förtroendefulla partnerskap. Vi ser inte bara oss själva som
                leverantörer, utan också som en del av våra kunders framgång.
                Genom att erbjuda personlig service, hög kvalitet och anpassade
                lösningar arbetar vi tillsammans med dig för att effektivisera
                och utveckla ditt affärsområde.
              </p>
              <p>
                Vi tror på en framtid byggd på samarbete och är stolta över att
                kunna stödja våra kunders verksamheter med engagemang, expertis
                och pålitliga leveranser. Låt oss bli en del av din resa mot
                framgång – vi ser fram emot att vara din partner och bidra till
                att skapa värde för din verksamhet, varje dag.
              </p>
              <h2 className=" font-bold text-lg ">Varför ska ni välja oss?</h2>
              <div className="flex w-full justify-between">
                <div className="flex flex-col items-center">
                  <div className=" flex  items-center">
                    <LuBarChartBig className=" text-sm  md:text-lg" />
                  </div>
                  <p className="text-xs max-w-[200px] mt-1 md:flex md:max-w-[180px] text-center ">
                    Liten eller stor, standard eller special. Vi anpassar oss
                    efter dina behov.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center">
                    <RiCustomerService2Fill className=" text-sm  md:text-lg" />
                  </div>
                  <p className="text-xs max-w-[200px] mt-1 md:flex md:max-w-[180px] text-center ">
                    Vårt team är alltid redo att hjälpa dig. Från beställning
                    till leverans, vi ser till att du får en smidig och pålitlig
                    service varje gång.
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <div className=" flex items-center">
                    <IoPricetagOutline className=" text-sm  md:text-lg" />
                  </div>
                  <p className="text-xs max-w-[200px] mt-1 md:flex md:max-w-[180px] text-center ">
                    Vi erbjuder konkurrenskraftiga priser utan att tumma på
                    kvaliteten.
                  </p>
                </div>
              </div>
            </article>
            <div className="h-[2px] w-full rounded-full bg-black shadow drop-shadow-2xl"></div>
          </div>
          <img
            alt="Bild för text blocket"
            loading="lazy"
            width="520"
            height="500"
            decoding="async"
            data-nimg="1"
            className="aspect-square h-full rounded-lg object-cover object-center order-1 lg:order-2"
            src="https://images.unsplash.com/photo-1595855759920-86582396756a?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </section>

      <section
        id="sustainability"
        className="snap-end  flex flex-col items-center justify-center gap-8 lg:gap-16 mx-auto my-24 max-w-[1440px] px-6 lg:my-32 lg:px-16 lg:h-screen"
      >
        <div className='items-center justify-items-center px-4 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10 md:[&amp;>div]:even:order-2 md:group-data-[reverse="true"]:[&amp;>div]:odd:order-2 md:group-data-[reverse="true"]:[&amp;>div]:even:order-1 md:[&amp;>img]:even:order-1'>
          <img
            alt="Bild för text blocket"
            loading="lazy"
            width="520"
            height="500"
            decoding="async"
            data-nimg="1"
            className="aspect-square h-full rounded-lg object-cover object-center"
            src="https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-bold md:text-5xl">
              Hållbarhet & Certifikat
            </h2>
            <article className="flex flex-col gap-4">
              <p className="font-normal text-base">
                Hållbarhet är en grundpelare i vår verksamhet. Vi arbetar aktivt
                för att minimera vårt miljöavtryck och bidra till en långsiktig,
                hållbar utveckling. Vårt arbete bygger på noga utvalda
                leverantörer, effektiva transporter och genomtänkt hantering –
                alltid med fokus på kvalitet och ansvar.
              </p>
              <p>
                Genom vårt samarbete med Svenska Retursystem använder vi
                återanvändbara SRS-backar och plastpallar, vilket minskar avfall
                och klimatpåverkan. På så sätt kan vi leverera våra produkter på
                ett hållbart sätt, från jord till bord. <br />
                <a
                  className="text-green-500"
                  href="https://www.retursystem.se/sv"
                >
                  Svenska Retursystem
                </a>
              </p>
              <p>
                Vår verksamhet följer strikta kvalitetsstandarder och är
                certifierad enligt branschens riktlinjer för att säkerställa att
                du som kund alltid får produkter av högsta kvalitet. Våra
                certifikat är din garanti för att våra produkter hanteras med
                omsorg, från jord till bord, och med ett tydligt ansvar för
                miljö och klimat.
              </p>
              <div className="flex w-full h-16 justify-between">
                <div className="flex gap-6">
                  <img
                    src="https://nzcmvlxhpsoqbubjnsyn.supabase.co/storage/v1/object/public/bilder/SIGILL_SKOLD_STAENDE_LITEN_SVART_TEXT.png?t=2024-11-14T13%3A17%3A18.750Z"
                    alt="sigill"
                    className="w-6 lg:w-16 h-full aspect-square object-cover object-center"
                  />
                  <img
                    src="https://nzcmvlxhpsoqbubjnsyn.supabase.co/storage/v1/object/public/bilder/ipcert.png?t=2024-11-14T13%3A14%3A16.464Z"
                    alt="ip cert"
                    className="w-12 lg:w-16 h-full aspect-square object-contain object-center"
                  />
                  <img
                    src="https://nzcmvlxhpsoqbubjnsyn.supabase.co/storage/v1/object/public/bilder/euekocert.png?t=2024-11-14T12%3A58%3A47.127Z"
                    alt="eko cert"
                    className="w-12 lg:w-16 h-full aspect-square object-contain object-center"
                  />
                </div>
                <img
                  src="https://nzcmvlxhpsoqbubjnsyn.supabase.co/storage/v1/object/public/bilder/srs.webp"
                  alt="svenska retursystem"
                  className=" mix-blend-difference w-24 lg:w-32 h-full aspect-square object-contain object-center"
                />
              </div>
            </article>
            <div className="h-[2px] w-full rounded-full bg-black shadow drop-shadow-2xl"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
