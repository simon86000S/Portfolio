import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
// import required modules
import { Pagination, Navigation, EffectFade } from "swiper/modules";
import background from "../assets/background.jpg";
const Caroussel = () => {
  return (
    <div>
      <>
        <Swiper
          effect={"fade"}
          pagination={{
            type: "progressbar",
          }}
          navigation={true}
          modules={[Pagination, Navigation, EffectFade]}
          className=" p-12 w-[60%] rounded-3xl max-sm:w-[100%]  "
        >
          <SwiperSlide className=" text-white h-[540px]  flex flex-col bg-black shadow-xl shadow-black ">
            <img className="w-full h-[150px]" src={background} />
           
            <Link
              to="https://montanes-service-r4ru48cm5-sims-projects-d92c89a3.vercel.app"
              className=" bg-gradient-to-b from-gray-800   rounded-full text-xl mt-2  text-center hover:bg-stone-600"
            >
              Voir le site !! c'est ici
            </Link>
            <h1 className="text-center text-xl text-white">Site Vitrine</h1>

            <div className="flex flex-col p-5 text-justify items-center justify-center  ">
              <h3 className="underline decoration-solid ">
                Présentation d’ensemble du projet:
              </h3>
              <p>
                Montanes Service est une entreprise à deux activitées:<br></br>
                 Espace vert et de Nettoyage de vitre
              </p>
              <h3 className="underline decoration-solid ">Missions:</h3>
              <p>-Création du Logo </p>
              <p>-Design du site</p>
              <p>-Respect de la charte graphique </p>
              <p>-Recueil d'avis clients</p>
              <p>-Formulaire de contact</p>
              
                <h1 className="underline decoration-solid ">
                  Technologie utilisés:
                </h1>
                <p>-ViteJs</p>
                <p>-Canvas</p>
              </div>
              <div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="bg-white h-[535px]  rounded-md  "
            data-swiper-autoplay="2000"
          >
            Slide 2
          </SwiperSlide>
          <SwiperSlide
            className="bg-white h-[500px] rounded-md"
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
