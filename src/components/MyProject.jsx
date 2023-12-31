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
  const [active, setActive] = useState(false);
  const navigation = [
    { name: "ViteJs", href: "#ViteJs", current: true },
    { name: "MySql", href: "#Project", current: false },
    { name: "NextJs", href: "#", current: false },
    { name: "site avec Back", href: "#", current: false },
  ];
  const Active = () => {
 setActive(!active)
  };
  return (
    <div id="Project" className="  bg-slate-200 shadow-xl shadow-black pt-10">
      <div className="relative">
        <h1 className='min-md:relative  text-8xl before:content-["Projets"] before:text-black before:opacity-10 before:absolute before:top-10 before:left-[45%] before:text-8xl max-sm:text-5xl max-sm:before:text-[50px] before:left-25% flex justify-center max-sm:before:bottom-0  '>
          Mes Projets
        </h1>
        <div className="p-10 m-10">
        {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "text-gray-900 text-sm font-extrabold  flex   relative [clip-path:circle([clip-path:polygon(20%_0%,74%_0%,100%_24%,100%_24%,100%_100%,80%_100%,33%_100%,0%_79%,0_0)] before:content-['']   before:w-[130px] before:left-[35px] before:h-[100px] before:bg-gradient-to-b from-gray-800 to-transparent before:absolute before:top-0 before:[clip-path:polygon(20%_0%,74%_0%,100%_24%,100%_24%,100%_100%,80%_100%,33%_100%,0%_79%,0_0)] before:border-[2px] before:border-gray-500  opacity-0.5   "
                            : "text-gray-900 text-sm font-extrabold  flex relative [clip-path:circle([clip-path:polygon(20%_0%,74%_0%,100%_24%,100%_24%,100%_100%,80%_100%,33%_100%,0%_79%,0_0)] before:content-['']   before:w-[130px] before:left-[35px] before:h-[100px] before:bg-gradient-to-r from-gray-800 to-transparent before:absolute before:top-0 before:[clip-path:polygon(20%_0%,74%_0%,100%_24%,100%_24%,100%_100%,80%_100%,33%_100%,0%_79%,0_0)] before:border-[2px] before:border-gray-500  opacity-0.5  ",
                          " px-[55px] text-[13px] font-extrabold py-[39px] font-medium flex  hover:text-green-600"
                        )}
                        aria-current={item.current ? "page" : undefined}
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
