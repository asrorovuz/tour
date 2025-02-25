import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

const Reservation = () => {

  const {t} = useTranslation()

  return (
    <div className={`bg-[url("https://zamontour.uz/assets/images/heading-bg-02.jpg")] bg-center bg-no-repeat bg-cover pt-32 laptop:pt-32 pb-48`}>
      <div className="container mx-auto">
        <div className="text-white flex flex-col items-center text-center">
          <h4 className="capitalize text-xl font-medium mb-[15px] pb-[25px]">
           {t("rever-c")}
          </h4>
          <div className="h-[1px] bg-text w-40"></div>
          <h2 className="capitalize text-[50px] font-bold mb-[30px]">
            {t("rever-title")}
          </h2>
          <Link
            to="contacts"
            smooth
            className="text-[14px] border border-gren-blue py-3 px-[30px] rounded-[25px] font-medium capitalize tracking-[0.5px] cursor-pointer bg-white text-gren-blue hover:text-white hover:bg-gren-blue transition"
          >
            {t("btn-disc")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
