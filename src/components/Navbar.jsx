import React from "react";
import { useState } from "react";
const Navbar = () => {
  return (
    <div className="flex flex-col w-[50vh]  }
   ">
      <div className="flex  ">
        <nav className="flex p-10  text-lg bg-black  [clip-path-polygon(0_3%,_75%_0%,_100%_50%,_75%_100%,_0_100%,_0%_50%)] uppercase">
        <ul className=" flex justify-center flex-col text-white ">
          <li className=' relative [clip-path:circle(70%_at_50%_30%)]'><a className="relative text-center hover:cursor-pointer before:content-[''] before:w-[0px] before:bg-lime-600 before:h-[1px] before:rotate-45 before:absolute hover:before:w-[100px] hover:before:top-[62px] hover:before:transition-[width]  duration-150 ease-in-out" href=''>Accueil</a></li>
          <li><a className="hover:cursor-pointer" href=''>Mes projets</a></li>
          <li><a className="hover:cursor-pointer" href=''>Contact</a></li>

        </ul>
        </nav>

      </div>
    </div>
  );
};

export default Navbar;
