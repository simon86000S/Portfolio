import React, { useState, Suspense } from "react";
import { Player } from "../../Player";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
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
    <div className="h-[100vh] bg-slate-200 shadow-xl shadow-black z-50">
      <div className="relative">
        <h1 className=' min-md:relative  text-8xl before:content-["à_propos"] before:text-black before:opacity-5 before:absolute before:top-10 before:left-[40%] before:text-9xl max-sm:text-5xl max-md:before:text-5xl max-sm:before:text-[50px] before:left-25% flex justify-center max-sm:before:bottom-0   '>
          Mes Compétences
        </h1>
      </div>
      <div className="flex justify-between pt-20 max-sm:flex max-sm:flex-col ">
        <div className="bg-black h-screen flex-1">
          <div className="flex flex-col text-white">
            <h1></h1>
            <p>fff</p>
            <p>fff</p>
            <p>fff</p>
            <p>fff</p>
            <p>fff</p>
            <p>fff</p>
            <p>fff</p>
            <p>fff</p>
            <p></p>
          </div>
        </div>
        <div className=" h-screen flex-1">
          <Canvas shadows camera={{ position: [-380, -200, -200] }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[0, 0, 0]} angle={0.9} />

            <Suspense>
              <OrbitControls
                enableZoom={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
              />
              <Scene />
              <Environment files="./Models/ship1.hdr" background />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default Skills;
