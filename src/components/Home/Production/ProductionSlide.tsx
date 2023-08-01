"use client";
import img13 from "../../../img/pic4.jpeg";
import img14 from "../../../img/pic5.jpeg";
import img15 from "../../../img/pic6.jpg";
import img16 from "../../../img/pic4.jpeg";

import Image from "next/image";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductionHeader from "./ProductionHeader";

const ProductionSlide = () => {
  return (
    <div className="-mx-6 mt-4 flex flex-col items-center justify-center gap-10">
      <Swiper
        className="mt-12 w-full"
        centeredSlides={true}
        allowTouchMove={false}
        slidesPerView={1.1}
      >
        <div className="absolute -top-0 z-50  flex h-full  justify-center">
          <ProductionHeader />
        </div>
        <SwiperSlide>
          <Image
            src={img13}
            alt=""
            className="mt-[20rem] w-[26rem] rounded-2xl object-cover drop-shadow-2xl lg:h-[45rem] md:h-[30rem] md:w-[79rem]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={img14}
            alt=""
            className="mt-[20rem] w-[26rem] rounded-2xl object-cover drop-shadow-2xl lg:h-[45rem] md:h-[30rem] md:w-[79rem]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={img15}
            alt=""
            className="mt-[20rem] w-[26rem] rounded-2xl object-cover drop-shadow-2xl md:h-[30rem] lg:h-[45rem] md:w-[79rem]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={img16}
            alt=""
            className="mt-[20rem] w-[26rem] rounded-2xl object-cover drop-shadow-2xl lg:h-[45rem] md:w-[79rem] md:h-[30rem]"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductionSlide;
