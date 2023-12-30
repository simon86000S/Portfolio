import React from "react";
import ReactTyped from "react-typed";
import CV from "../assets/CV.pdf";
const Description = () => {
  return (
    <div className=" relative  h-full bg-cover  bg-[url('./assets/simm.jpg')]  bg-center pl-2 bg-no-repeat text-gray-200 after:content-[''] after:w-full after:h-full after:bg-black  after:absolute after:top-0 after:left-0 after:opacity-60 ">
      <div className=" md:flex items-center justify-center  h-full">
        <div className=" max-sm:flex items-end justify-center h-full text-6xl flex max-sm:leading-5 max-sm:flex   ">
          <div className=" max-sm:p-10 rounded-xl mb-20 opacity-100 z-50">
            <h1 className="md:text-4xl max-sm:text-xl ">
              Bonjour,<br></br>
              <h1 className="max-sm:text-3xl lg:text-6xl">
                Je suis Simon AUDRAIN
              </h1>{" "}
              <ReactTyped
                className="max-sm:text-4xl  lg:text-6xl "
                strings={[
                  "Développeur Fullstack",
                  "Développeur Font-End",
                  "Développeur Back-End",
                  "Gestion de Base de données",
                ]}
                typeSpeed={50}
                loop
                backSpeed={20}
                showCursor={true}
              />
            </h1>
            <h4 className="text-xl max-sm:text-base  ">
              Créateur de site web & mobile{" "}
            </h4>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
