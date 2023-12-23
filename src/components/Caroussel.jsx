import React, { useRef, useState,useEffect } from "react";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/pagination";
import debrou from "../assets/debrou.mp4";
// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import navBar from "../assets/navBar.jpg";
const Caroussel = () => {
  const [rezize, setRezize] = useState(true);


  useEffect(() => {
    const handleResize = () => {
      if (window.screen.width >= 700) {
        setRezize(false);
        console.log("false")
      } else {
        setRezize(true);
        console.log("true")
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
<div>
<>
  <Swiper
  slidesPerView={3}
  spaceBetween={30}
  freeMode={true}
  pagination={{
    clickable: true
  }}
  modules={[FreeMode, Pagination, Autoplay]}
  className="mt-[70px] pl-10 max-sm: pl-0 ">
  <SwiperSlide
    className="text-white h-[590px] rounded-md flex flex-col bg-black  "
    data-swiper-autoplay="2000"
  >
    <video autoplay loop muted className="relative">
      <source src={debrou} type="video/mp4" />
    </video>

    <img className="absolute top-0" src={navBar} />
    <Link
      to="https://montanes-service-r4ru48cm5-sims-projects-d92c89a3.vercel.app"
      className=" bg-lime-600 rounded-full text-xl mt-2 text-center"
    >
      Aller sur le site
    </Link>
    <h1 className="text-center text-xl text-lime-600">Site Vitrine</h1>

    <div className="flex flex-col p-2 ">
      <h3 className="underline decoration-solid ">
        Présentation d’ensemble du projet:
      </h3>
      <p>
        Montanes Service est une entreprise à deux activitées: Espace vert
        et de Nettoyage de vitre
      </p>
      <h3 className="underline decoration-solid ">Missions:</h3>
      <p>-Création du Logo </p>
      <p>-Design du site</p>
      <p>-Respect de la charte graphique </p>
      <p>-Recueil d'avis clients</p>
      <p>-Formulaire de contact</p>
      <div>
        <h1 className="underline decoration-solid ">
          Technologie utilisés:
        </h1>
        <p>-ViteJs</p>
        <p>-Canvas</p>
      </div>
    </div>
  </SwiperSlide>
  <SwiperSlide
    className="bg-white h-[580px] rounded-md "
    data-swiper-autoplay="2000"
  >
    Slide 2
  </SwiperSlide>
  <SwiperSlide
    className="bg-white h-[580px] rounded-md"
    data-swiper-autoplay="2000"
  >
    Slide 3
  </SwiperSlide>
  <SwiperSlide>Slide 4</SwiperSlide>
  <SwiperSlide>Slide 5</SwiperSlide>
  <SwiperSlide>Slide 6</SwiperSlide>
  <SwiperSlide>Slide 7</SwiperSlide>
  <SwiperSlide>Slide 8</SwiperSlide>
  <SwiperSlide>Slide 9</SwiperSlide>
</Swiper>
</>
</div>
 
  );
};
export default Caroussel;
