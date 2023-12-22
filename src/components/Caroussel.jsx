import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import debrou from "../assets/debrou.mp4";
// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import navBar from '../assets/navBar.jpg'
const Caroussel = () => {
  return (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className=" Swiper mt-40 pl-10 flex flex-col  "
      >
        <SwiperSlide
          className="  text-white h-[500px] rounded-md flex flex-col bg-black  "
          data-swiper-autoplay="2000"
        >
          <video autoplay loop muted className="relative  rounded-md">
            <source src={debrou} type="video/mp4" />
          </video>
       
          <img className="absolute top-0" src={navBar}/>
          <button className=" bg-lime-600 rounded-full text-xl mt-2">Aller sur le site</button>
          <h1 className="text-center text-xl text-lime-600">Site Vitrine</h1>
         
          <div className="flex flex-col p-5 ">
          <h3 className="underline decoration-solid ">Présentation d’ensemble du projet:</h3>
              <p>Montanes Service est une entreprise à deux activitées: Espace vert et de Nettoyage de vitre</p>
            <h3>Objectifs:</h3> 
            </div>


        </SwiperSlide>
        <SwiperSlide
          className="bg-white h-[500px] rounded-md "
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
    </div>
  );
};
export default Caroussel;
