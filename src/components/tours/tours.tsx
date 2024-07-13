import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";
import {
  ArrowLeft,
  ArrowRight,
  BuildIcon,
  CarIcon,
  People,
  PlaneIcon,
} from "../icon";

import candImg from "../../assets/images/cand.jpg";
import { Link } from "react-scroll";
import { useRef } from "react";

const Tours = () => {
  const swiper = useRef(null);

  return (
    <div id="tours" className="py-[70px] border-b">
      <div className="container mx-auto">
        <div className="max-w-[60%] text-center mx-auto mb-20">
          <h2 className="mb-5 text-3xl font-bold capitalize text-link-text">
            Best Weekly Offers In Each City
          </h2>
          <p className="text-[15px] text-text">
            Discover the best weekly offers in each city, curated just for you.
            Immerse yourself in a world of savings and indulge in unparalleled
            experiences.
          </p>
        </div>
        <div className="relative">
          <Swiper
            ref={swiper}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false
          }}
            loop={true}
            slidesPerView={3}
            spaceBetween={30}
            modules={[Navigation, Autoplay]}
            className="mySwiper mb-10"
          >
            <SwiperSlide>
              <div className="relative">
                <div className="w-[65%] min-h-[420px]">
                  <img src={candImg} alt="img" className="rounded-l-[32px]"/>
                </div>
                <div className="absolute top-[50px] right-0 -translate-1/2 rounded-[23px] bg-white p-[30px] z-20 shadow-card">
                  <h4 className="flex items-center justify-between text-xl font-bold text-link-text mb-2">
                    Canada <span className="text-gren-blue">$600</span>
                  </h4>
                  <h6 className="flex justify-between items-center text-[15px] text-text border-b border-b-custom-white-10 pb-4 mb-4">
                    <div className="flex items-center">
                      <span className="mr-2">
                        <People />
                      </span>
                      Check Ins
                    </div>
                    <div>/person</div>
                  </h6>
                  <ul className="text-text flex flex-col gap-y-[10px] mb-10">
                    <li className="font-semibold text-link-text text-[15px]">
                      Deal Includes:
                    </li>
                    <li className="flex items-center">
                      <CarIcon />{" "}
                      <span className="ml-1">
                        5 Days Trip &gt; Hotel Included
                      </span>
                    </li>
                    <li className="flex items-center">
                      <PlaneIcon />{" "}
                      <span className="ml-1"> Airplane Bill Included</span>
                    </li>
                    <li className="flex items-center">
                      <BuildIcon />{" "}
                      <span className="ml-1"> Daily Places Visit</span>
                    </li>
                  </ul>
                  <div>
                    <Link to="contact" smooth delay={1000} className="cursor-pointer w-full bg-gren-blue border border-gren-blue py-3 px-[30px] text-[14px] rounded-3xl tracking-[0.5px] transition hover:opacity-90 text-custom-white capitalize">
                      make a reservation
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <div className="w-[65%] min-h-[420px]">
                  <img src={candImg} alt="img" className="rounded-l-[32px]"/>
                </div>
                <div className="absolute top-[50px] right-0 -translate-1/2 rounded-[23px] bg-white p-[30px] z-20 shadow-card">
                  <h4 className="flex items-center justify-between text-xl font-bold text-link-text mb-2">
                    Canada <span className="text-gren-blue">$600</span>
                  </h4>
                  <h6 className="flex justify-between items-center text-[15px] text-text border-b border-b-custom-white-10 pb-4 mb-4">
                    <div className="flex items-center">
                      <span className="mr-2">
                        <People />
                      </span>
                      Check Ins
                    </div>
                    <div>/person</div>
                  </h6>
                  <ul className="text-text flex flex-col gap-y-[10px] mb-10">
                    <li className="font-semibold text-link-text text-[15px]">
                      Deal Includes:
                    </li>
                    <li className="flex items-center">
                      <CarIcon />{" "}
                      <span className="ml-1">
                        5 Days Trip &gt; Hotel Included
                      </span>
                    </li>
                    <li className="flex items-center">
                      <PlaneIcon />{" "}
                      <span className="ml-1"> Airplane Bill Included</span>
                    </li>
                    <li className="flex items-center">
                      <BuildIcon />{" "}
                      <span className="ml-1"> Daily Places Visit</span>
                    </li>
                  </ul>
                  <div>
                    <Link to="contact" smooth delay={1000} className="cursor-pointer w-full bg-gren-blue border border-gren-blue py-3 px-[30px] text-[14px] rounded-3xl tracking-[0.5px] transition hover:opacity-90 text-custom-white capitalize">
                      make a reservation
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide><SwiperSlide>
              <div className="relative">
                <div className="w-[65%] min-h-[420px]">
                  <img src={candImg} alt="img" className="rounded-l-[32px]"/>
                </div>
                <div className="absolute top-[50px] right-0 -translate-1/2 rounded-[23px] bg-white p-[30px] z-20 shadow-card">
                  <h4 className="flex items-center justify-between text-xl font-bold text-link-text mb-2">
                    Canada <span className="text-gren-blue">$600</span>
                  </h4>
                  <h6 className="flex justify-between items-center text-[15px] text-text border-b border-b-custom-white-10 pb-4 mb-4">
                    <div className="flex items-center">
                      <span className="mr-2">
                        <People />
                      </span>
                      Check Ins
                    </div>
                    <div>/person</div>
                  </h6>
                  <ul className="text-text flex flex-col gap-y-[10px] mb-10">
                    <li className="font-semibold text-link-text text-[15px]">
                      Deal Includes:
                    </li>
                    <li className="flex items-center">
                      <CarIcon />{" "}
                      <span className="ml-1">
                        5 Days Trip &gt; Hotel Included
                      </span>
                    </li>
                    <li className="flex items-center">
                      <PlaneIcon />{" "}
                      <span className="ml-1"> Airplane Bill Included</span>
                    </li>
                    <li className="flex items-center">
                      <BuildIcon />{" "}
                      <span className="ml-1"> Daily Places Visit</span>
                    </li>
                  </ul>
                  <div>
                    <Link to="contact" smooth delay={1000} className="cursor-pointer w-full bg-gren-blue border border-gren-blue py-3 px-[30px] text-[14px] rounded-3xl tracking-[0.5px] transition hover:opacity-90 text-custom-white capitalize">
                      make a reservation
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide><SwiperSlide>
              <div className="relative">
                <div className="w-[65%] min-h-[420px]">
                  <img src={candImg} alt="img" className="rounded-l-[32px]"/>
                </div>
                <div className="absolute top-[50px] right-0 -translate-1/2 rounded-[23px] bg-white p-[30px] z-20 shadow-card">
                  <h4 className="flex items-center justify-between text-xl font-bold text-link-text mb-2">
                    Canada <span className="text-gren-blue">$600</span>
                  </h4>
                  <h6 className="flex justify-between items-center text-[15px] text-text border-b border-b-custom-white-10 pb-4 mb-4">
                    <div className="flex items-center">
                      <span className="mr-2">
                        <People />
                      </span>
                      Check Ins
                    </div>
                    <div>/person</div>
                  </h6>
                  <ul className="text-text flex flex-col gap-y-[10px] mb-10">
                    <li className="font-semibold text-link-text text-[15px]">
                      Deal Includes:
                    </li>
                    <li className="flex items-center">
                      <CarIcon />{" "}
                      <span className="ml-1">
                        5 Days Trip &gt; Hotel Included
                      </span>
                    </li>
                    <li className="flex items-center">
                      <PlaneIcon />{" "}
                      <span className="ml-1"> Airplane Bill Included</span>
                    </li>
                    <li className="flex items-center">
                      <BuildIcon />{" "}
                      <span className="ml-1"> Daily Places Visit</span>
                    </li>
                  </ul>
                  <div>
                    <Link to="contact" smooth delay={1000} className="cursor-pointer w-full bg-gren-blue border border-gren-blue py-3 px-[30px] text-[14px] rounded-3xl tracking-[0.5px] transition hover:opacity-90 text-custom-white capitalize">
                      make a reservation
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide><SwiperSlide>
              <div className="relative">
                <div className="w-[65%] min-h-[420px]">
                  <img src={candImg} alt="img" className="rounded-l-[32px]"/>
                </div>
                <div className="absolute top-[50px] right-0 -translate-1/2 rounded-[23px] bg-white p-[30px] z-20 shadow-card">
                  <h4 className="flex items-center justify-between text-xl font-bold text-link-text mb-2">
                    Canada <span className="text-gren-blue">$600</span>
                  </h4>
                  <h6 className="flex justify-between items-center text-[15px] text-text border-b border-b-custom-white-10 pb-4 mb-4">
                    <div className="flex items-center">
                      <span className="mr-2">
                        <People />
                      </span>
                      Check Ins
                    </div>
                    <div>/person</div>
                  </h6>
                  <ul className="text-text flex flex-col gap-y-[10px] mb-10">
                    <li className="font-semibold text-link-text text-[15px]">
                      Deal Includes:
                    </li>
                    <li className="flex items-center">
                      <CarIcon />{" "}
                      <span className="ml-1">
                        5 Days Trip &gt; Hotel Included
                      </span>
                    </li>
                    <li className="flex items-center">
                      <PlaneIcon />{" "}
                      <span className="ml-1"> Airplane Bill Included</span>
                    </li>
                    <li className="flex items-center">
                      <BuildIcon />{" "}
                      <span className="ml-1"> Daily Places Visit</span>
                    </li>
                  </ul>
                  <div>
                    <Link to="contact" smooth delay={1000} className="cursor-pointer w-full bg-gren-blue border border-gren-blue py-3 px-[30px] text-[14px] rounded-3xl tracking-[0.5px] transition hover:opacity-90 text-custom-white capitalize">
                      make a reservation
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide><SwiperSlide>
              <div className="relative">
                <div className="w-[65%] min-h-[420px]">
                  <img src={candImg} alt="img" className="rounded-l-[32px]"/>
                </div>
                <div className="absolute top-[50px] right-0 -translate-1/2 rounded-[23px] bg-white p-[30px] z-20 shadow-card">
                  <h4 className="flex items-center justify-between text-xl font-bold text-link-text mb-2">
                    Canada <span className="text-gren-blue">$600</span>
                  </h4>
                  <h6 className="flex justify-between items-center text-[15px] text-text border-b border-b-custom-white-10 pb-4 mb-4">
                    <div className="flex items-center">
                      <span className="mr-2">
                        <People />
                      </span>
                      Check Ins
                    </div>
                    <div>/person</div>
                  </h6>
                  <ul className="text-text flex flex-col gap-y-[10px] mb-10">
                    <li className="font-semibold text-link-text text-[15px]">
                      Deal Includes:
                    </li>
                    <li className="flex items-center">
                      <CarIcon />{" "}
                      <span className="ml-1">
                        5 Days Trip &gt; Hotel Included
                      </span>
                    </li>
                    <li className="flex items-center">
                      <PlaneIcon />{" "}
                      <span className="ml-1"> Airplane Bill Included</span>
                    </li>
                    <li className="flex items-center">
                      <BuildIcon />{" "}
                      <span className="ml-1"> Daily Places Visit</span>
                    </li>
                  </ul>
                  <div>
                    <Link to="contact" smooth delay={1000} className="cursor-pointer w-full bg-gren-blue border border-gren-blue py-3 px-[30px] text-[14px] rounded-3xl tracking-[0.5px] transition hover:opacity-90 text-custom-white capitalize">
                      make a reservation
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="flex justify-center  gap-x-10 relative w-max mx-auto">
            <button
              //@ts-ignore
              onClick={() => swiper?.current?.scrollBy(+1)}
              className="swiper-button-next w-10 h-10 flex items-center justify-center border border-gren-blue rounded-full bg-white text-gren-blue transition hover:bg-gren-blue hover:text-white"
            >
              <ArrowLeft />
            </button>
            <button
              //@ts-ignore
              onClick={() => swiper?.current?.scrollBy(+1)}
              className="swiper-button-prev w-10 h-10 flex items-center justify-center border border-gren-blue rounded-full bg-white text-gren-blue transition hover:bg-gren-blue hover:text-white"
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tours;
