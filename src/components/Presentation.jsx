import React from "react";
import CV from "../assets/CV.pdf";

const Presentation = () => {
  return (
    <div className=' relative flex flex-col justify-center items-center  z-50 min-md:relative  text-8xl before:content-["Qui-suis-je"] before:text-black before:opacity-5 before:absolute before:top-10 before:left-[10%] before:text-9xl max-sm:text-5xl max-md:before:text-5xl max-sm:before:text-[50px] before:left-25% flex justify-center max-sm:before:bottom-0    '>
      <h1 className="max-w-sm relative text-center text-4xl mt-20 before:content-['']  before:absolute before:-bottom-5 before:bg-black before:w-[100px] before:left-[30%] before:h-[1px]">
        Presentation
      </h1>
      <p className="  max-w-md text-xl p-10 leading-8  text-justify text-center  ">
        En tant que <strong>développeur Web</strong> depuis plus de 3 ans, je
        suis passionné par la création de sites web et d'application mobile.
        J'ai acquis une connaissance dans différents langages de programmation,
        ainsi que dans l'utilisation de frameworks populaires tels que ViteJs et
        NextJs. j'ai travaillé sur une variété de projets, allant des sites web
        à la <strong>gestion de base de données.</strong>
        <br />
        Je conçois et réalise des sites web et des {" "}
        <strong>applications Web mobiles.</strong>
        <br />
        N'hésitez pas à voir mon CV au format pdf:{" "}
        <a
          className=" text-sm p-1.5 bg-black  text-white  hover:text-gray-500 rounded-md"
          href={CV}
          download
        >
           Télécharger Mon CV
        </a>
       <p>ou voir mon Github:  <a
          className=" text-sm p-1.5 bg-black  text-white  hover:text-gray-500 rounded-md"
          href={CV}
          
        >
           Lien vers mon Github
        </a></p>
      </p>
    </div>
  );
};

export default Presentation;
