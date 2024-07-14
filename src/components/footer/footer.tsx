import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div>
      <div className={`bg-[url("https://zamontour.uz/assets/images/cta-bg.jpg)] py-[75px] bg-cover bg-center bg-no-repeat`}>
        <div className="container mx-auto">
          <div className="laptop:flex justify-between items-center">
            <div className="text-white mb-10 text-center laptop:text-left laptop:mb-0">
              <h2 className="uppercase text-[40px] mb-[10px] font-bold">
                ARE YOU LOOKING TO TRAVEL ?
              </h2>
              <h4 className="capitalize text-xl font-semibold tracking-[0.5px]">
                Make A Reservation By Clicking The Button
              </h4>
            </div>
            <div className="flex justify-center laptop:justify-end">
              <Link
                to="contacts"
                className="capitalize border border-white text-white text-[14px] tracking-[0.5px] py-3 px-[30px] font-medium rounded-[25px] cursor-pointer bg-gren-blue hover:bg-white hover:text-gren-blue"
              >
                book yours now
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-[25px] bg-[#22b3c1] text-white text-[15px]">
        Copyright © 2024{" "}
        <Link to={"home"} smooth>
          Zamon Business Tour
        </Link>
        . All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
