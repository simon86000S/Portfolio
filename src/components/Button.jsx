import React from "react";
import CV from "../assets/CV.pdf";


const Button = () => {
  return (
    <div className=" relative flex items-center justify-center  ">
      <a className="   text-lg font-extrabold relative [clip-path:circle([clip-path:polygon(20%_0%,74%_0%,100%_24%,100%_24%,100%_100%,80%_100%,33%_100%,0%_79%,0_0)] before:content-['Mon_CV'] before:flex before:items-center before:justify-center  before:w-[130px] before:left[15px] before:h-[100px] before:bg-gradient-to-b from-lime-300 to-transparent before:absolute before:top-10 before:[clip-path:polygon(20%_0%,74%_0%,100%_24%,100%_24%,100%_100%,80%_100%,33%_100%,0%_79%,0_0)] before:border-[2px] before:border-lime-500  opacity-0.5 max-sm:before:h-[65px] lg:before:top-[150px] lg:before:flex items-center max-sm:before:-top-2 before:text-stone-400" href={CV} download>
        {" "}
      
      </a>
    </div>
  );
};

export default Button;
