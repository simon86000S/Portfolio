import React from "react";
import Typewriter from "typewriter-effect";
import Button from "./Button";

const Description = () => {
  return (
    <div className="bg-black h-full rounded-xl shadow-xl shadow-black text-white">
      <div className="lg:relative inline-flex w-[60%] leading-7 p-10 uppercase left-[20%]  ">
        <Typewriter
          className="lg:text-xl "
          onInit={(typewriter) => {
            typewriter

              .typeString(
                "Bonjour et bienvenue sur mon portfolio <br></br> Je suis Simon Audrain, un développeur passionné, specialisé sur React JS. Je suis un mordu de l'informatique en quête sans cesse d'apprentissage.  "
              )

              .start();
          }}
        />
      </div>
      <Button />
    </div>
  );
};

export default Description;
