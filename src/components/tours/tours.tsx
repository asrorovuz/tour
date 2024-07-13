import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { People } from "../icon";

import candImg from "../../assets/images/cand.jpg"

const Tours = () => {
  return (
    <div id="tour" className="py-[70px]">
      <div className="container mx-auto">
        <div className="max-w-[456px] text-center mx-auto mb-20">
          <h2 className="mb-5 text-3xl font-bold capitalize text-link-text">
            Best Weekly Offers In Each City
          </h2>
          <p className="text-[15px] text-text">
            Discover the best weekly offers in each city, curated just for you.
            Immerse yourself in a world of savings and indulge in unparalleled
            experiences.
          </p>
        </div>
        <div>
          <Swiper
            navigation={true}
            slidesPerView={3}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="relative">
                <img src={candImg} alt="img" />
                <div className="absolut rounded-[23px] top-1/2 right-0 bg-white translate-y-1/2 p-[30px] z-20">
                  <h4 className="flex items-center justify-between text-xl font-bold text-link-text mb-2">Canada <span>$600</span></h4>
                  <h6 className="flex justify-between items-center text-[15px] text-text">
                    <div className="flex items-center">
                      <span className="mr-2">
                        <People />
                      </span>
                      Check Ins
                    </div>
                    <div>/person</div>
                  </h6>
                  <ul></ul>
                  <div></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>test2</SwiperSlide>
            <SwiperSlide>test3</SwiperSlide>
            <SwiperSlide>test4</SwiperSlide>
            <SwiperSlide>test5</SwiperSlide>
            <SwiperSlide>test6</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Tours;
