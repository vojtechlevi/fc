import React from "react";
import Test from "./Test";
import placeholder from "../assets/Unknown.png";

function About() {
  return (
    <>
      <div
        id="About"
        className=" text-white w-full h-screen relative flex flex-col "
      >
        <div className=" flex flex-col justify-center items-center my-10">
          <div className="">
            <h2 className=" font-bold text-lg mt-5 text-center md:text-2xl">
              Vilka är vi?
            </h2>
            <p className=" mt-5 text-center text-xs max-w-56 md:max-w-[500px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
              nemo eum sed? Ducimus officia nemo excepturi facere libero nam
            </p>
          </div>
          <img
            src={placeholder}
            alt=""
            srcset=""
            className=" hidden md:flex md:my-5"
          />
        </div>
        <div className=" flex flex-col justify-center items-center my-10">
          <div className="">
            <h2 className=" font-bold text-lg mt-5 text-center">
              Varför Fruktcentralen?
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
