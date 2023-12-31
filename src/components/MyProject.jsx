import React from "react";
import { Suspense, useState } from "react";
import { Link } from "react-router-dom";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "../../src/App.css";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Player } from "../../Player";
import Caroussel from "./Caroussel_vitrine";
const MyProject = () => {
  const [active, setActive] = useState(true);
  const navigation = [
    { name: "ViteJs", Link: "Caroussel", current: true },
    { name: "ViteJs & NodeJs", Link: "Caroussel_Back", current: false },
    { name: "NextJs", Link: "#", current: false },
    { name: "MySQL", Link: "#", current: false },
  ];
  const Active = () => {
 setActive(!active)
  };
  return (
    <div id="Project" className="  bg-slate-200 shadow-xl shadow-black pt-10">
      <div className="relative">
        <h1 className='min-md:relative  text-8xl before:content-["Portfolio"] before:text-black before:opacity-5 before:absolute before:top-10 before:left-[40%] before:text-9xl max-sm:text-5xl max-md:before:text-5xl max-sm:before:text-[50px] before:left-25% flex justify-center max-sm:before:bottom-0  '>
          Mes Projets
        </h1>
        <div className="p-10 m-20">
          {" "}
          {navigation.map(item=>(
            <Link
            key={item.name}
            to={item.Link}
            className="p-5 bg-black text-white ml-5"
          
            
          >
            {item.name}
          </Link>
          ))}
        </div>

        <div></div>
      </div>
    </div>
  );
};
export default MyProject;
