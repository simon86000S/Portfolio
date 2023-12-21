import React from "react";
import Particule from "./Particule";
import { Suspense, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "../../src/App.css";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Player } from "../../Player";
import Caroussel from "./Caroussel";
const MyProject = () => {
  function Scene() {
    const [hovered, setHover] = useState(false);
    const ref = useRef(null);
    useFrame(() => {
      ref.current.rotation.y = 6;
      ref.current.position.y = -90;
      ref.current.position.x = 30;
      ref.current.position.z = 20;
      if (hovered) {
        ref.current.rotation.x = 150;
        ref.current.tranform.transition = 0.5;
      }
    });

    return (
      <>
        <mesh className="z-50 ">
          <Player />
        </mesh>
      </>
    );
  }
  return (
    <div
      id="Project"
      className=" flex 
      flex-col bg-slate-200 shadow-xl shadow-black p-15 h-[100vh]"
    >
      <Particule />
      <div className="relative">
        <h1 className='min-md:relative  text-8xl before:content-["Projets"] before:text-black before:opacity-10 before:absolute before:top-20  before:left-[40%] before:text-7xl max-sm:text-3xl before:text-5xl before:left-10 flex justify-center  '>
          Projets
        </h1>

        <Caroussel />

        <div></div>
      </div>
    </div>
  );
};
export default MyProject;
