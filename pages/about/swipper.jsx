import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/css/navigation';


SwiperCore.use([Autoplay, Navigation, Pagination]);

const SwiperComponent = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        speed={3000}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
      >
      <SwiperSlide style={{backgroundColor: "red"}}>Slide 1</SwiperSlide>
      <SwiperSlide style={{backgroundColor: "blue"}}>Slide 2</SwiperSlide>
      <SwiperSlide style={{backgroundColor: "yellow"}}>Slide 3</SwiperSlide>
      <SwiperSlide style={{backgroundColor: "pink"}}>Slide 4</SwiperSlide>
      <SwiperSlide style={{backgroundColor: "red"}}>Slide 5</SwiperSlide>
      <SwiperSlide style={{backgroundColor: "blue"}}>Slide 6</SwiperSlide>
      <SwiperSlide style={{backgroundColor: "yellow"}}>Slide 7</SwiperSlide>
      <SwiperSlide style={{backgroundColor: "pink"}}>Slide 8</SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperComponent;