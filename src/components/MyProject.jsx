import React from "react";
import {useState } from "react";
import { Link } from "react-router-dom";

import "../../src/App.css";

const MyProject = () => {
  const [active, setActive] = useState(true);
  const navigation = [
    { name: "ViteJs", Link: "/", current: true },
    { name: "NodeJs", Link: "/Caroussel_Back", current: false },
    { name: "NextJs", Link: "#", current: false },
    { name: "MySQL", Link: "#", current: false },
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div id="Project" className="   bg-slate-200 shadow-xl shadow-black pt-10">
      <div className="relative">
        <h1 className='min-md:relative  text-8xl before:content-["Portfolio"] before:text-black before:opacity-5 before:absolute before:top-10 before:left-[30%] before:text-9xl max-sm:text-5xl max-md:before:text-5xl max-sm:before:text-[50px] before:left-25% flex justify-center max-sm:before:bottom-0  '>
          Mes Projets
        </h1>
        <div className="lg:p-20 m-10 max-sm:p-0 max-sm:mt-20  max-sm:m-0  ">
          {" "}
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.Link}
              className="p-5 bg-black text-white  hover:bg-slate-700  ml-5 max-sm:m-2 max-sm:p-2"
              
              aria-current={item.current ? "page" : undefined}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default MyProject;
