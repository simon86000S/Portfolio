import React from "react";
import { useState } from "react";
import Particule from "./Particule";
const Navbar = () => {
  return (
    <div
      className="sm:flex flex-col w-[50vh]  
   "
    >
      <div className="flex  ">
        <nav className="flex p-10  text-[15px] bg-black  [clip-path-polygon(0_3%,_75%_0%,_100%_50%,_75%_100%,_0_100%,_0%_50%)] uppercase">
          <ul className=" flex justify-center flex-col text-lime-500 font-bold">
            <li className=" relative [clip-path:circle(70%_at_50%_30%)] before:content-['']   before:w-[150px] before:-left-[25px] before:h-[150px] before:bg-gradient-to-r from-lime-500 to-transparent before:absolute before:top-0 before:[clip-path:polygon(20%_0%,74%_0%,100%_24%,100%_24%,100%_100%,80%_100%,33%_100%,0%_79%,0_0)] before:border-[2px] before:border-lime-500  opacity-0.5 ">
              <a className="relative text-center hover:cursor-pointer " href="">
                Accueil
              </a>{" "}
            </li>
            <li className="relative before:content-['']  before:w-[150px] before:-left-[25px] before:h-[150px]  before:bg-gradient-to-l from-lime-500 to-transparent before:absolute before:top-0 before:[clip-path:polygon(20%_0%,74%_0%,100%_24%,100%_24%,100%_100%,80%_100%,33%_100%,0%_79%,0_0)] before:border-[2px] before:border-lime-500 opacity-90">
              <a
                className=" relative left-[-20px] hover:cursor-pointer"
                href=""
              >
                Mes projets
              </a>
            </li>
            <li className="relative before:content-['']  before:w-[150px] before:-left-[25px] before:h-[150px]  before:bg-gradient-to-t from-lime-500 to-transparent before:absolute before:top-0 before:[clip-path:polygon(20%_0%,74%_0%,100%_24%,100%_24%,100%_100%,80%_100%,33%_100%,0%_79%,0_0)] before:border-[2px] before:border-lime-500  opacity-50">
              <a className=" relative text-center hover:cursor-pointer" href="">
                Contact
              </a>
            </li>
            
          </ul>
          <Particule/>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
