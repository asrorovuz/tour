import { Link } from "react-scroll";
import afrImg from "../../assets/images/afr.jpg";
import airplaneImg from "../../assets/images/airplane.jpg";
import { useTranslation } from "react-i18next";

const About = () => {

  const {t}= useTranslation()

  return (
    <div id="about" className="pt-10">
      <div className="container mx-auto">
        <div className="mobile:max-w-[1100px] mb-20">
          <h2 className="mb-5 text-3xl font-bold capitalize text-link-text">
            {t("about-title")}
          </h2>
          <p className="text-[15px] text-text leading-[30px]">
          {t("about-c")}
          </p>
        </div>

        <div className="flex flex-col mobile:flex-row gap-y-4 gap-x-6 flex-wrap w-full laptop:max-w-[1100px] pb-[30px] mb-[30px] border-b border-b-[#eee]">
          <div className="rounded-3xl overflow-hidden w-full mobile:w-[40%] tablet:w-1/3 max-h-[248px]">
            <img src={afrImg} alt="img" className="w-full h-full" />
          </div>
          <div className="mobile:w-[50%]">
            <div className="flex flex-col laptop:flex-row gap-y-8 laptop:items-center justify-between gap-x-10">
              <div>
                <h3 className="text-5 mb-[5px] text-link-text font-bold">
                {t("about-card-title-1")}
                </h3>
                <span className="text-[15px] text-text ">{t("about-card-com-1")}</span>
              </div>
              <div>
                <Link
                  to="contacts"
                  smooth
                  className="block w-max mx-auto text-[14px] py-3 px-[30px] rounded-[25px] tracking-[0.5px] bg-gren-blue transition text-white cursor-pointer hover:opacity-80"
                >
                 {t("btn-exp")}
                </Link>
              </div>
            </div>
            <p className="my-[18px] text-text text-[15px] leading-[30px]">
            {t("about-card-c-1")}
            </p>
          </div>
        </div>

        <div className="flex flex-col mobile:flex-row gap-y-4 gap-x-6 flex-wrap w-full laptop:max-w-[1100px] pb-[30px] mb-[30px] border-b border-b-[#eee]">
          <div className="rounded-3xl overflow-hidden w-full mobile:w-[40%] tablet:w-1/3 max-h-[248px]">
            <img src={airplaneImg} alt="img" className="w-full h-full" />
          </div>
          <div className="mobile:w-[50%]">
            <div className="flex flex-col laptop:flex-row gap-y-8 laptop:items-center justify-between gap-x-10">
              <div>
                <h3 className="text-5 mb-[5px] text-link-text font-bold">
                {t("about-card-title-2")}
                </h3>
                <span className="text-[15px] text-text ">
                {t("about-card-com-2")}
                </span>
              </div>
              <div>
                <Link
                  to="contacts"
                  smooth
                  className="block w-max mx-auto text-[14px] py-3 px-[30px] rounded-[25px] tracking-[0.5px] bg-gren-blue transition text-white cursor-pointer hover:opacity-80"
                >
                  {t("btn-exp")}
                </Link>
              </div>
            </div>
            <p className="my-[18px] text-text text-[15px] leading-[30px]">
            {t("about-card-c-2")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
