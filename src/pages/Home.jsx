import { Suspense, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import {
  EnvironmentCube,
  Loader,
  OrbitControls,
  useTexture,
} from "@react-three/drei";

import "../../src/App.css";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Player } from "../../Player";
import Navbar from "../components/Navbar";
import Description from "../components/Description";
import MyProject from "../components/MyProject";
function Scene() {
  const [hovered, setHover] = useState(false);
  const ref = useRef(null);
  useFrame(() => {
    ref.current.rotation.y = 10.5;
    ref.current.position.y = -110;
    ref.current.position.x = 100;
    ref.current.position.z = 10;
    if (hovered) {
      ref.current.rotation.x = 150;
      ref.current.tranform.transition = 0.5;
    }
  });

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

export default function Home() {
  return (
    <div id='Home' className=" lg: w-[100%]  flex flex-col  h-[100vh]  max-sm:flex ">
      <Navbar />
      <Description/>
     

      
    </div>
  );
}
