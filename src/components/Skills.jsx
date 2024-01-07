import React, { useState, Suspense } from "react";
import { Player } from "../../Player";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { FaConnectdevelop } from "react-icons/fa6";
import { SiAltiumdesigner } from "react-icons/si";
import { FaDatabase } from "react-icons/fa6";
import Contact from "./Contact";
const Skills = () => {

  return (
    <div id="Skill" className=" h-[100vh] bg-slate-200 shadow-xl shadow-black z-50">
      <div className="relative">
        <h1 className=' min-md:relative  text-8xl before:content-["à_propos"] before:text-black before:opacity-5 before:absolute before:top-10 before:left-[40%] before:text-9xl max-sm:text-5xl max-md:before:text-5xl max-sm:before:text-[50px] before:left-25% flex justify-center max-sm:before:bottom-0   '>
          Mes Compétences
        </h1>
      </div>
      <div className="flex justify-between pt-20  ">
        <div className="bg-black flex-1   ">
          <div className="flex flex-col  w-full text-white     ">
            <div className=" p-10 flex justify-center  text-slate-200 text-6xl">
              {" "}
              <MdOutlineDeveloperMode />
            </div>
            <div className="  max-sm:flex max-sm:flex-col  max-sm:items-center  relative flex  justify-around before:content-[''] before:w-full before:h-[2px] before:bg-white before:absolute before:bottom-0 before:left-0">
              <h1 className=" text-justify uppercase text-2xl pb-10   ">
                Front-end{" "}
              </h1>
              <div>
                <h2 className="underline text-xl ">Languages:</h2>
                <ul className="leading-8" >
                  <li >-HTML5</li>
                  <li>-CSS</li>
                  <li>-SASS</li>
                  <li>-JavaScript</li>
                  <li>-TailwindCSS</li>
                  <h2 className="pt-10 underline text-xl leading-8">Frameworks:</h2>
                  <li>-ViteJS</li>
                  <li>-NextJs</li>
                </ul>
                <div>
                  <h2 className="pt-10 leading-8  text-xl   underline">Outils de développement:</h2>
                  <ul className="leading-8 pb-5">
                    <li>-Git</li>
                    <li>-GitHub</li>
                    <li>-VSCode</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className=" p-10 flex justify-center  text-slate-200 text-6xl">
            {" "}
            <FaConnectdevelop />
          </div>
          <div className=" text-white max-sm:flex max-sm:flex-col  max-sm:items-center  relative flex  justify-around before:content-[''] before:w-full before:h-[2px] before:bg-white before:absolute before:bottom-0 before:left-0">
            <h1 className="  uppercase text-2xl pb-10 ">Back-End </h1>
            <div>
              <h2 className="underline text-xl pt-10 leading-8 ">Languages:</h2>
              <ul className="leading-8">
                <li>-Node JS</li>
                <li>-PHP </li>
              </ul>
              <div>
                <h2 className="underline pt-10  text-xl  ">Outils de développement:</h2>
                <ul className="leading-8 pb-5">
                  <li>-VSCode</li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" bg-black p-10 flex justify-center  text-slate-200 text-6xl">
            {" "}
            <SiAltiumdesigner />
          </div>
          <div className="  text-white max-sm:flex max-sm:flex-col  max-sm:items-center  relative flex  justify-around before:content-[''] before:w-full before:h-[2px] before:bg-white before:absolute before:bottom-0 before:left-0">
            <h1 className="   text-justify uppercase text-2xl pb-10  ">
              Designer
            </h1>
            <div>
              <h2 className="text-xl underline">Design:</h2>
              <ul className="leading-8" >
                <li>-UX, UI</li>
                <li>-Logo</li>
                <li>-Element 3d</li>
              </ul>
              <div>
                <h2 className="text-xl underline pt-10">Outils de développement:</h2>
                <ul className="leading-8 pb-5">
                  <li>-Figma</li>
                  <li>-ThreeJs</li>
                </ul>
              </div>
              
            </div>
            
          </div>
          <div className=" p-10 flex justify-center  text-slate-200 text-6xl">
            {" "}
            <FaDatabase  />
          </div>
          <div className=" text-white max-sm:flex max-sm:flex-col  max-sm:items-center  relative flex  justify-around before:content-[''] before:w-full before:h-[2px] before:bg-white before:absolute before:bottom-0 before:left-0">
            <h1 className="  uppercase text-2xl pb-10 ">Base de données </h1>
            <div>
              <h2 className="underline text-xl pt-10 leading-8 ">Languages:</h2>
              <ul className="leading-8">
                <li>-MySQL</li>
                <li>-SQLite </li>
              </ul>
              <div>
                <h2 className="underline pt-10  text-xl  ">Outils de développement:</h2>
                <ul className="leading-8 pb-5">
                  <li>-VSCode</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Skills;
