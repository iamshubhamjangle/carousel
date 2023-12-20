import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import "swiper/css/bundle";

const carouselApiResponse = [
  "/image1.png",
  "/image2.png",
  "/image3.png",
  "/image4.png",
];

function Carousel() {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      modules={[Navigation, Pagination, Scrollbar, Autoplay, EffectFade]}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 2000 }}
      effect="fade"
    >
      {carouselApiResponse.map((imageSrc, index) => (
        <SwiperSlide key={index}>
          <img
            className="h-[80vh] w-[100%] object-cover p-2"
            src={imageSrc}
            alt="carousel"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
