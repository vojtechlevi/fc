import React from "react";
import { useInView } from "react-intersection-observer";

function Test() {
  const [ref1, inView1] = useInView({ triggerOnce: false });
  return (
    <div className=" bg-[rgb(30,30,30)] text-white py-6 flex justify-center items-center gap-4 md:gap-20 lg:gap-40">
      <div
        id="test"
        ref={ref1}
        className={
          inView1
            ? "opacity-100 transition-all duration-[1s] delay-[200ms] "
            : "opacity-0 transition-all duration-500 transform -translate-x-[100%]"
        }
      >
        <p className=" font-bold text-md md:text-2xl">
          35<span className=" text-green-300 ml-1">+</span>
        </p>
        <p className=" tracking-[2px] text-xs">Års erfarenhet</p>
      </div>
      <div
        id="test"
        ref={ref1}
        className={
          inView1
            ? "opacity-100 transition-all duration-[1s] delay-[400ms]"
            : "opacity-0 transition-all duration-500 transform -translate-x-[100%]"
        }
      >
        <p className=" font-bold text-md md:text-2xl">
          300<span className=" text-green-300 ml-1">+</span>
        </p>
        <p className=" tracking-[2px] text-xs">Nöjda kunder</p>
      </div>
      <div
        id="test"
        ref={ref1}
        className={
          inView1
            ? "opacity-100 transition-all duration-[1s] delay-[600ms]"
            : "opacity-0 transition-all duration-500 transform -translate-x-[100%]"
        }
      >
        <p className=" font-bold text-md md:text-2xl">
          300<span className=" text-green-300 ml-1">+</span>
        </p>
        <p className=" tracking-[2px] text-xs">Artiklar</p>
      </div>
    </div>
  );
}

export default Test;
