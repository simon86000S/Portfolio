import React from "react";
import Typewriter from 'typewriter-effect';

const Description = () => {
  return (
    <div className="bg-black h-full text-white">
      <div className=" relative left-[20%] bg-lime-600 inline-flex p-10 pr-20 rounded-lg w-[50%] h-[30%]">
      <Typewriter
  onInit={(typewriter) => {
    typewriter.typeString("Bonjour, je m'appelle Simon Audrain Développeur Web react")
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(1500)
      
    
      .start();
  }}
/>
      </div>
    </div>
   
  );
};

export default Description;
