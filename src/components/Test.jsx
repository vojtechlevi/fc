import React from "react";
import { useInView } from "react-intersection-observer";

function Test() {
  const [ref1, inView1] = useInView({ triggerOnce: false });
  return (
    <div className=" w-full bg-[rgb(30,30,30)] text-white py-6 flex justify-around items-center ">
      <div
        id="test"
        ref={ref1}
        className={
          inView1
            ? "opacity-100 transition-all duration-[1s] delay-[200ms] min-w-[100px] md:min-w-[200px]  "
            : "opacity-0 transition-all duration-500 "
        }
      >
        <p className=" font-bold text-md md:text-2xl">
          35<span className=" text-green-300 ml-1">+</span>
        </p>
        <p className=" tracking-[2px] text-[10px]">Års erfarenhet</p>
      </div>
      <div
        id="test"
        ref={ref1}
        className={
          inView1
            ? "opacity-100 transition-all duration-[1s] delay-[400ms] min-w-[100px] md:min-w-[200px]"
            : "opacity-0 transition-all duration-500 "
        }
      >
        <p className=" font-bold text-md md:text-2xl">
          300<span className=" text-green-300 ml-1">+</span>
        </p>
        <p className=" tracking-[2px] text-[10px]">Nöjda kunder</p>
      </div>
      <div
        id="test"
        ref={ref1}
        className={
          inView1
            ? "opacity-100 transition-all duration-[1s] delay-[600ms] min-w-[100px] md:min-w-[200px]"
            : "opacity-0 transition-all duration-500"
        }
      >
        <p className=" font-bold text-md md:text-2xl">
          300<span className=" text-green-300 ml-1">+</span>
        </p>
        <p className=" tracking-[2px] text-[10px]">Artiklar</p>
      </div>
    </div>
  );
}

export default Test;
