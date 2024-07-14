import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay } from "swiper/modules";
import { Link } from "react-scroll";
import userIcon from "../../assets/icons/user.svg";
import globalIcon from "../../assets/icons/globe.svg";
import homeIcon from "../../assets/icons/home.svg";

const Home = () => {
  return (
    <div id="home" className="-translate-y-[30px]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-[700px] bg-[url('https://zamontour.uz/assets/images/istanbul.jpg')] bg-no-repeat bg-center bg-cover">
            <div className="h-full flex items-center justify-center flex-col">
              <div className="mb-[60px]">
                <p className="font-medium text-xl text-white mb-5 text-center">
                  Take a Glimpse Into The Beautiful City Of:
                </p>
                <h1 className="font-bold text-[50px] text-white mb-[30px] text-center">
                  Istanbul
                </h1>
                <div className="flex justify-center">
                  <Link
                    to="contacts"
                    className="mx-auto text-[14px] py-3 px-[30px] rounded-[25px] tracking-[0.5px] bg-gren-blue transition text-white cursor-pointer hover:bg-white hover:text-gren-blue"
                  >
                    Go There
                  </Link>
                </div>
              </div>
              <div className="container">
                <div className="w-full py-[30px] px-[60px] bg-white rounded-[60px] flex flex-col items-start mobile:flex-row mobile:items-center justify-between flex-wrap gap-x-10 gap-y-5">
                  <div className="flex items-center gap-x-5">
                    <div className="w-[60px] h-[60px] border border-gren-blue flex items-center justify-center rounded-full">
                      <img src={userIcon} alt="icon" />
                    </div>
                    <div>
                      <span className="text-[15px] text-text font-normal">
                        Population:
                      </span>
                      <h2 className="text-xl text-gren-blue font-bold ">
                        44.48M
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center gap-x-5">
                    <div className="w-[60px] h-[60px] border border-gren-blue flex items-center justify-center rounded-full">
                      <img src={globalIcon} alt="icon" />
                    </div>
                    <div>
                      <span className="text-[15px] text-text font-normal">
                        Territory:
                      </span>
                      <h2 className="text-xl text-gren-blue font-bold ">
                        275.400 KM2
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center gap-x-5">
                    <div className="w-[60px] h-[60px] border border-gren-blue flex items-center justify-center rounded-full">
                      <img src={homeIcon} alt="icon" />
                    </div>
                    <div>
                      <span className="text-[15px] text-text font-normal">
                        AVG Price:
                      </span>
                      <h2 className="text-xl text-gren-blue font-bold ">
                        $946.000
                      </h2>
                    </div>
                  </div>
                  <div>
                    <Link
                      to="support-second"
                      smooth
                      className="mx-auto text-[14px] py-3 px-[30px] rounded-[25px] tracking-[0.5px] bg-gren-blue transition text-white cursor-pointer hover:opacity-80"
                    >
                      Explore More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[700px] bg-[url('https://zamontour.uz/assets/images/antalya2.jpg')] bg-no-repeat bg-center bg-cover">
            <div className="h-full flex items-center justify-center flex-col">
              <div className="mb-[60px]">
                <p className="font-medium text-xl text-white mb-5 text-center">
                  Take a Glimpse Into The Beautiful City Of:
                </p>
                <h1 className="font-bold text-[50px] text-white mb-[30px] text-center">
                  Antalya
                </h1>
                <div className="flex justify-center">
                  <Link
                    to="contacts"
                    className="mx-auto text-[14px] py-3 px-[30px] rounded-[25px] tracking-[0.5px] bg-gren-blue transition text-white cursor-pointer hover:bg-white hover:text-gren-blue"
                  >
                    Go There
                  </Link>
                </div>
              </div>
              <div className="container">
                <div className="w-full py-[30px] px-[60px] bg-white rounded-[60px] flex flex-col items-start mobile:flex-row mobile:items-center justify-between flex-wrap gap-x-10 gap-y-5">
                  <div className="flex items-center gap-x-5">
                    <div className="w-[60px] h-[60px] border border-gren-blue flex items-center justify-center rounded-full">
                      <img src={userIcon} alt="icon" />
                    </div>
                    <div>
                      <span className="text-[15px] text-text font-normal">
                        Population:
                      </span>
                      <h2 className="text-xl text-gren-blue font-bold ">
                        8.66M
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center gap-x-5">
                    <div className="w-[60px] h-[60px] border border-gren-blue flex justify-center rounded-full">
                      <img src={globalIcon} alt="icon" />
                    </div>
                    <div>
                      <span className="text-[15px] text-text font-normal">
                        Territory:
                      </span>
                      <h2 className="text-xl text-gren-blue font-bold ">
                        41.290 KM2
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center gap-x-5">
                    <div className="w-[60px] h-[60px] border border-gren-blue flex items-center justify-center rounded-full">
                      <img src={homeIcon} alt="icon" />
                    </div>
                    <div>
                      <span className="text-[15px] text-text font-normal">
                        AVG Price:
                      </span>
                      <h2 className="text-xl text-gren-blue font-bold ">
                        $1.100.200
                      </h2>
                    </div>
                  </div>
                  <div>
                    <Link
                      to="support-second"
                      smooth
                      className="mx-auto text-[14px] py-3 px-[30px] rounded-[25px] tracking-[0.5px] bg-gren-blue transition text-white cursor-pointer hover:opacity-80"
                    >
                      Explore More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[700px] bg-[url('https://zamontour.uz/assets/images/dubai2.jpg')] bg-no-repeat bg-center bg-cover">
            <div className="h-full flex items-center justify-center flex-col">
              <div className="mb-[60px]">
                <p className="font-medium text-xl text-white mb-5 text-center">
                  Take a Glimpse Into The Beautiful City Of:
                </p>
                <h1 className="font-bold text-[50px] text-white mb-[30px] text-center">
                  Dubai
                </h1>
                <div className="flex justify-center">
                  <Link
                    to="contacts"
                    className="mx-auto text-[14px] py-3 px-[30px] rounded-[25px] tracking-[0.5px] bg-gren-blue transition text-white cursor-pointer hover:bg-white hover:text-gren-blue"
                  >
                    Go There
                  </Link>
                </div>
              </div>
              <div className="container">
                <div className="w-full py-[30px] px-[60px] bg-white rounded-[60px] flex flex-col items-start mobile:flex-row mobile:items-center justify-between flex-wrap gap-x-10 gap-y-5">
                  <div className="flex items-center gap-x-5">
                    <div className="w-[60px] h-[60px] border border-gren-blue flex items-center justify-center rounded-full">
                      <img src={userIcon} alt="icon" />
                    </div>
                    <div>
                      <span className="text-[15px] text-text font-normal">
                        Population:
                      </span>
                      <h2 className="text-xl text-gren-blue font-bold ">
                        67.41 M
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center gap-x-5">
                    <div className="w-[60px] h-[60px] border border-gren-blue flex items-center justify-center rounded-full">
                      <img src={globalIcon} alt="icon" />
                    </div>
                    <div>
                      <span className="text-[15px] text-text font-normal">
                        Territory:
                      </span>
                      <h2 className="text-xl text-gren-blue font-bold ">
                        551.500 KM2
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center gap-x-5">
                    <div className="w-[60px] h-[60px] border border-gren-blue flex items-center justify-center rounded-full">
                      <img src={homeIcon} alt="icon" />
                    </div>
                    <div>
                      <span className="text-[15px] text-text font-normal">
                        AVG Price:
                      </span>
                      <h2 className="text-xl text-gren-blue font-bold ">
                        $425.600
                      </h2>
                    </div>
                  </div>
                  <div>
                    <Link
                      to="support-second"
                      smooth
                      className="mx-auto text-[14px] py-3 px-[30px] rounded-[25px] tracking-[0.5px] bg-gren-blue transition text-white cursor-pointer hover:opacity-80"
                    >
                      Explore More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[700px] bg-[url('https://zamontour.uz/assets/images/sharm.jpg')] bg-no-repeat bg-center bg-cover">
            <div className="h-full flex items-center justify-center flex-col">
              <div className="mb-[60px]">
                <p className="font-medium text-xl text-white mb-5 text-center">
                  Take a Glimpse Into The Beautiful City Of:
                </p>
                <h1 className="font-bold text-[50px] text-white mb-[30px] text-center">
                  Sharm El-Sheikh
                </h1>
                <div className="flex justify-center">
                  <Link
                    to="contacts"
                    className="mx-auto text-[14px] py-3 px-[30px] rounded-[25px] tracking-[0.5px] bg-gren-blue transition text-white cursor-pointer hover:bg-white hover:text-gren-blue"
                  >
                    Go There
                  </Link>
                </div>
              </div>
              <div className="container">
                <div className="w-full py-[30px] px-[60px] bg-white rounded-[60px] flex flex-col items-start mobile:flex-row mobile:items-center justify-between flex-wrap gap-x-10 gap-y-5">
                  <div className="flex items-center gap-x-5">
                    <div className="w-[60px] h-[60px] border border-gren-blue flex items-center justify-center rounded-full">
                      <img src={userIcon} alt="icon" />
                    </div>
                    <div>
                      <span className="text-[15px] text-text font-normal">
                        Population:
                      </span>
                      <h2 className="text-xl text-gren-blue font-bold ">
                        69.86 M
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center gap-x-5">
                    <div className="w-[60px] h-[60px] border border-gren-blue flex items-center justify-center rounded-full">
                      <img src={globalIcon} alt="icon" />
                    </div>
                    <div>
                      <span className="text-[15px] text-text font-normal">
                        Territory:
                      </span>
                      <h2 className="text-xl text-gren-blue font-bold ">
                        513.120 KM2
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center gap-x-5">
                    <div className="w-[60px] h-[60px] border border-gren-blue flex items-center justify-center rounded-full">
                      <img src={homeIcon} alt="icon" />
                    </div>
                    <div>
                      <span className="text-[15px] text-text font-normal">
                        AVG Price:
                      </span>
                      <h2 className="text-xl text-gren-blue font-bold ">
                        $165.450
                      </h2>
                    </div>
                  </div>
                  <div>
                    <Link
                      to="support-second"
                      smooth
                      className="mx-auto text-[14px] py-3 px-[30px] rounded-[25px] tracking-[0.5px] bg-gren-blue transition text-white cursor-pointer hover:opacity-80"
                    >
                      Explore More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
