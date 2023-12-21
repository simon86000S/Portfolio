import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
const Caroussel = () => {
  return (
    <>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper w-full h-[500px] absolute top-40  rounded-full max-sm:left-[0] w-[60%]"
      >
        <SwiperSlide className=" flex justify-center items-center text-center text-xl bg-black">
          <div className="bg-black"></div>
        </SwiperSlide>
        <SwiperSlide className=" flex justify-center items-center text-center text-xl bg-white">
          Slide 2
        </SwiperSlide>
        <SwiperSlide className=" flex justify-center items-center text-center text-xl bg-white">
          Slide 3
        </SwiperSlide>
        <SwiperSlide className=" flex justify-center items-center text-center text-xl bg-white">
          Slide 4
        </SwiperSlide>
        <SwiperSlide className=" flex justify-center items-center text-center text-xl bg-white">
          Slide 5
        </SwiperSlide>
        <SwiperSlide className=" flex justify-center items-center text-center text-xl bg-white">
          Slide 6
        </SwiperSlide>
        <SwiperSlide className=" flex justify-center items-center text-center text-xl bg-white">
          Slide 7
        </SwiperSlide>
        <SwiperSlide className=" flex justify-center items-center text-center text-xl bg-white">
          Slide 8
        </SwiperSlide>
        <SwiperSlide className=" flex justify-center items-center text-center text-xl bg-white">
          Slide 9
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default Caroussel;
