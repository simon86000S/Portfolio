import React, { useState, Suspense } from "react";
import { Player } from "../../Player";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { DiNodejsSmall } from "react-icons/di";
const Skills = () => {
  function Scene() {
    const ref = useRef(null);
    useFrame((_, delta) => {
      ref.current.rotation.y = 10.4;
    });
    function Scene() {
      return (
        <>
          <mesh
            onClick={(e) => console.log("click")}
            ref={ref}
            scale={[180, 180, 180]}
          >
            <Player />
          </mesh>
        </>
      );
    }

    return (
      <>
        <mesh
          className="zIndex:-10  "
          onClick={() => setHover(true)}
          ref={ref}
          scale={[180, 180, 180]}
        >
          <Player />
        </mesh>
      </>
    );
  }
  return (
    <div className=" bg-slate-200 shadow-xl shadow-black z-50">
      <div className="relative">
        <h1 className=' min-md:relative  text-8xl before:content-["à_propos"] before:text-black before:opacity-5 before:absolute before:top-10 before:left-[40%] before:text-9xl max-sm:text-5xl max-md:before:text-5xl max-sm:before:text-[50px] before:left-25% flex justify-center max-sm:before:bottom-0   '>
          Mes Compétences
        </h1>
      </div>
      <div className="flex justify-between pt-20  ">
        <div className="bg-black h-screen flex-1   ">
          <div className="flex flex-col  w-full text-white     ">
            <div className=" p-10 flex justify-center  text-slate-200 text-6xl">
              {" "}
              <MdOutlineDeveloperMode />
            </div>
            <div className=" max-sm:flex max-sm:flex-col  max-sm:items-center p-10 relative flex  justify-around before:content-[''] before:w-full before:h-[2px] before:bg-white before:absolute before:bottom-0 before:left-0">
              <h1 className=" text-justify uppercase text-2xl   ">
                Front-end{" "}
              </h1>
              <div>
                <h2 className="underline ">Languages:</h2>
                <ul>
                  <li>-HTML5</li>
                  <li>-CSS</li>
                  <li>-SASS</li>
                  <li>-JavaScript</li>
                  <li>-TailwindCSS</li>
                  <h2 className="pt-5 underline">Frameworks:</h2>
                  <li>-ViteJS</li>
                  <li>-NextJs</li>
                </ul>
              </div>
              <div>
                <h2 className="  underline">Outils de développement:</h2>
                <ul>
                  <li>-Git</li>
                  <li>-GitHub</li>
                  <li>-VSCode</li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" p-10 flex justify-center  text-slate-200 text-6xl">
            {" "}
            <DiNodejsSmall />
          </div>
          <div className=" p-10 text-white relative flex  justify-around before:content-[''] before:w-full before:h-[2px] before:bg-white before:absolute before:bottom-0 before:left-0">
            <h1 className=" text-justify uppercase text-xl  ">Back-End </h1>
            <div>
              <h2 className="underline ">Languages:</h2>
              <ul>
                <li>-Node JS</li>
                <li>-PHP </li>
              </ul>
            </div>
            <div>
              <h2 className="underline">Outils de développement:</h2>
              <ul>
                <li>-Git</li>
                <li>-GitHub</li>
                <li>-VSCode</li>
              </ul>
            </div>
          </div>
          <div className=" bg-black p-10 flex justify-center  text-slate-200 text-6xl">
            {" "}
            <DiNodejsSmall />
          </div>
          <div className=" bg-black -z-20 p-10 text-white relative flex  justify-around before:content-[''] before:w-full before:h-[2px] before:bg-white before:absolute before:bottom-0 before:left-0">
            <h1 className=" text-justify uppercase text-xl  ">Designer</h1>
            <div>
              <h2>Design:</h2>
              <ul>
                <li>-UX, UI</li>
                <li>-Logo</li>
                <li>-Element 3d</li>
              </ul>
            </div>
            <div>
              <h2>Outils de designer:</h2>
              <ul>
                <li>-Figma</li>
                <li>-ThreeJs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
