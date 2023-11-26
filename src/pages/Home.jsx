import { Suspense, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { Loader, OrbitControls, useTexture } from "@react-three/drei";
import { Environment } from "@react-three/drei";
import "../../src/App.css";
import { PlayerMe } from "../../PlayerMe";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import {Player} from '../../Player';
function Scene() {
  const ref = useRef(null);
  useFrame(() => {
    ref.current.rotation.y = 10.5;
    ref.current.position.y = -110;
    ref.current.position.x = 100;
    ref.current.position.z = 10;
  });

  return (
    <>
      <mesh  onClick={(e) => console.log('click')} ref={ref} scale={[180, 180,180]}>
        <Player />
      </mesh>
    </>
  );
}

export default function Home() {
    
  return (
    <div className="absolute top-0 w-[80%] right-0 " >
        
      <Canvas  frameloop="demand" shadows camera={{ position: [-480, -200,-200] }} >
        
        <ambientLight intensity={0.5} />
        <spotLight position={[0, 0, 0]} angle={0.9} />
       
        <Suspense >
        <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI /2}
        minPolarAngle={Math.PI /2} />
          <Scene 
          />
          <Environment files='./Models/ship1.hdr' background ></Environment>
        </Suspense>
      </Canvas>

</div>
  );
}
