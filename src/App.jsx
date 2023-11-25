import { Suspense, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { OrbitControls, useTexture } from "@react-three/drei";
import { Environment } from "@react-three/drei";

import "../src/App.css";

import {Me} from "../public/components/Me";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
function Scene() {
  const ref = useRef(null);
  useFrame(() => {
    ref.current.rotation.y = 4.5;
    ref.current.position.y = -20;
    ref.current.position.x = 18;
    ref.current.position.z = 10;
  });

  return (
    <>
      <mesh ref={ref} scale={[15, 15, 15]}>
        <Me />
      </mesh>
    </>
  );
}

export default function App() {
  return (
    <div className="overflow-hidden">
      <Canvas camera={{ position: [-20, 2, 5] }}>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <spotLight position={[0, 0, 0]} angle={0.9} />
        <Suspense>
          <Scene />
        </Suspense>
        <Environment files="./Models/ship1.hdr" background></Environment>
      </Canvas>
    </div>
  );
}
