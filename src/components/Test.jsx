import React from "react";
import { useInView } from "react-intersection-observer";

function Test() {
  const [ref1, inView1] = useInView({ triggerOnce: false });
  return (
    <div className="text-white bg-green-500 h-56 w-full flex justify-center items-center gap-10">
      <div
        id="test"
        ref={ref1}
        className={
          inView1
            ? "opacity-100 transition-all duration-[1s] delay-[200ms] h-36 w-36 bg-slate-400"
            : "opacity-0 transition-all duration-500 h-36 w-36 bg-slate-400 transform -translate-x-[100%]"
        }
      >
        <p>articles</p>
      </div>
      <div
        id="test"
        ref={ref1}
        className={
          inView1
            ? "opacity-100 transition-all duration-[1.2s] delay-[400ms] h-36 w-36 bg-slate-400"
            : "opacity-0 transition-all duration-500 h-36 w-36 bg-slate-400 transform -translate-x-[100%]"
        }
      >
        <p>articles2</p>
      </div>
      <div
        id="test"
        ref={ref1}
        className={
          inView1
            ? "opacity-100 transition-all duration-[1.4s] delay-[600ms] h-36 w-36 bg-slate-400"
            : "opacity-0 transition-all duration-500 h-36 w-36 bg-slate-400 transform -translate-x-[100%]"
        }
      >
        <p>articles3</p>
      </div>
    </div>
  );
}

export default Test;
