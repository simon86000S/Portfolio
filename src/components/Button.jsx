import React from "react";
import CV from "../assets/CV.pdf";

const Button = () => {
  return (
    <div className=" relative flex items-center justify-center  ">
      <a className=" text-lime-100 text-lg font-extrabold  flex justify-center  relative [clip-path:circle([clip-path:polygon(20%_0%,74%_0%,100%_24%,100%_24%,100%_100%,80%_100%,33%_100%,0%_79%,0_0)] before:content-['']   before:w-[130px] before:left[15px] before:h-[100px] before:bg-gradient-to-b from-lime-500 to-transparent before:absolute before:-top-6 before:[clip-path:polygon(20%_0%,74%_0%,100%_24%,100%_24%,100%_100%,80%_100%,33%_100%,0%_79%,0_0)] before:border-[2px] before:border-lime-500  opacity-0.5  " href={CV} download>
        {" "}
        Mon CV
      </a>
    </div>
  );
};

export default Button;
