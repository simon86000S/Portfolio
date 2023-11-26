import React from "react";
import { useState } from "react";
const Navbar = () => {
  return (
    <div className="flex flex-col bg-black w-[50vh] z-50">
      <div className="flex">
        <ul className=" flex flex-col text-white">
          <li className="hover:cursor-pointer">Accueil</li>
          <li>Mes projets</li>
          <li>Accueil</li>

        </ul>

      </div>
    </div>
  );
};

export default Navbar;
