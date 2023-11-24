import { Suspense, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { OrbitControls, useTexture } from "@react-three/drei";
import { Environment } from "@react-three/drei";

import "../src/App.css";

import { Dino } from "./Dino";
import Model from "./Scene";
import Me from "../Me";
import { Background } from "../Background";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
function Scene() {
  const ref = useRef(null);
  useFrame(() => {
    ref.current.rotation.y = 30;
    ref.current.position.y = -3;
  });

  return (
    <>
      <mesh ref={ref} scale={[3, 3, 3]}>
        <Me />
      </mesh>
    </>
  );
}

export default function App() {
  return (
    <div className={{overflow:"hidden"}}> 
       <Canvas   camera={{ position: [-5, 2, 2] }}>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <spotLight position={[25, 25, 30]} angle={0.9} />
        <Suspense>
          <Scene />
        </Suspense>
        <Environment files="./Models/ship1.hdr" background></Environment>
      </Canvas>
      <p>coucou les ami</p>
      </div>  
    
  );
}
