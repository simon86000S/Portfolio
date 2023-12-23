import React,{useState,Suspense}from "react";
import { Player } from "../../Player";
import { useRef } from "react";
import { Canvas,useFrame } from "@react-three/fiber";
import { Environment } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei'
const Skills = () => {
    function Scene() {
        const ref = useRef(null);
        useFrame((_, delta) => {
            ref.current.rotation.y=10.4
            
          })
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
    <div className="h-[100vh] bg-slate-200 shadow-xl shadow-black ">
      <div className="relative">
        <h1 className=' text-center pt-[250px]   text-8xl before:content-["Compétences"] before:text-black before:opacity-10 before:absolute before:bottom-[40px]  before:left-[25%] before:text-8xl max-sm:text-3xl max-sm:before:text-[40px] flex justify-center max-sm:before:-bottom-5 max-sm:pt-20  '>
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
            <p>fff</p>
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
