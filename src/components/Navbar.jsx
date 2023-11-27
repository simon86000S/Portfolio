import React from "react";
import { useState } from "react";
const Navbar = () => {
  return (
    <div className="flex flex-col w-[50vh]  }
   ">
      <div className="flex  ">
        <nav className="flex p-10  text-lg bg-black  [clip-path-polygon(0_3%,_75%_0%,_100%_50%,_75%_100%,_0_100%,_0%_50%)] uppercase">
        <ul className=" flex justify-center flex-col text-white ">
          <li className=' relative [clip-path:circle(70%_at_50%_30%)]'><a className="  text-center hover:cursor-pointer hover:" href=''>Accueil</a><span className=" before:content-[''] before:w-[150px] before:rotate-45 before:h-[1px] before:bg-lime-800 before:absolute before:top-[85px] before:left-[10px] hover:before:bg-blue hover:before:w-[150px] hover:before:h-[1px] "></span></li>
          <li><a className="hover:cursor-pointer" href=''>Mes projets</a></li>
          <li><a className="hover:cursor-pointer" href=''>Contact</a></li>

        </ul>
        </nav>

      </div>
    </div>
  );
};

export default Navbar;
