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
  const ref = useRef("");
  const Active = () => {
    if (true) {
      ref.current.style.backgroundColor = "red";
      setActive(true);
    } else {
      setActive(false);
    }
  };
  return (
    <div id="Project" className="  bg-slate-200 shadow-xl shadow-black pt-10 ">
      <div className="relative">
        <h1 className='min-md:relative  text-8xl before:content-["Projets"] before:text-black before:opacity-10 before:absolute before:top-0 before:left-[40%] before:text-8xl max-sm:text-5xl max-sm:before:text-[50px] before:left-25% flex justify-center max-sm:before:bottom-0  '>
          Mes Projets
        </h1>
        <div onClick={Active} className="p-10 m-10">
          {" "}
          <Link
            ref={ref}
            className="p-5 bg-black text-white ml-2"
            to="Caroussel"
          >
            Vitejs
          </Link>
          <Link
            ref={ref}
            className="p-5 bg-black text-white ml-2"
            to="Caroussel_Back"
          >
            Mysql
          </Link>
        </div>

        <div></div>
      </div>
    </div>
  );
};
export default MyProject;
