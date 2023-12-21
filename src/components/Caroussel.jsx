import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination,Autoplay } from 'swiper/modules';
const Caroussel = () => {
  return (
    <>
      <Swiper
      
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination,Autoplay]}
        className="mySwiper mt-40"
      >
        <SwiperSlide className='bg-white h-[500px]' data-swiper-autoplay="2000"><div className='flex flex-col items-center'><h1>Montanes Service</h1>
        <h2>Objectifs:Site presentant les différentes activités de l'entreprise</h2>
        <p></p>
        </div></SwiperSlide>
        <SwiperSlide className='bg-white h-[500px] 'data-swiper-autoplay="2000">Slide 2</SwiperSlide>
        <SwiperSlide className='bg-white h-[500px]'data-swiper-autoplay="2000">Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
};
export default Caroussel;
