import { Link } from "react-scroll";
import logo from "../../assets/logo.svg";
import { CloseIcon, Instagram, Telegram, ToggleIcon } from "../icon";
import { useState } from "react";

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const linkArr: string[] = ["home", "about", "tours", "contacts"];

  return (
    <div className="min-h-[70px] bg-gren-blue fixed z-50 w-full">
      <div className="container mx-auto">
        <div className="py-[15px] w-full flex items-center justify-between">
          <div className="flex items-center justify-between w-full laptop:w-max">
            <Link to="/">
              <img src={logo} alt="logo" className="w-[159px]" />
            </Link>
            <div
              onClick={() => setIsOpenMenu(!isOpenMenu)}
              className="text-white laptop:hidden"
            >
              {isOpenMenu ? <CloseIcon /> : <ToggleIcon />}
            </div>
          </div>

          <div className="hidden laptop:flex">
            <nav className="">
              <ul className="flex items-center">
                {linkArr?.map((elem) => (
                  <li className="px-[15px]" key={elem}>
                    <Link
                      to={elem}
                      activeClass="active"
                      className="link capitalize laptop:text-custom-white laptop:border-0 cursor-pointer hover:opacity-80"
                      smooth
                    >
                      {elem}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="hidden laptop:flex gap-x-5">
            <div>
              <ul className="flex items-center gap-x-5 text-custom-white uppercase">
                <li className="cursor-pointer">uz</li>
                <li className="cursor-pointer">eng</li>
                <li className="cursor-pointer">ru</li>
              </ul>
            </div>
            <div className="flex items-center gap-x-5 text-custom-white">
            <Telegram/>
            <Instagram/>
            </div>
          </div>
        </div>
      </div>

      {isOpenMenu && (
        <div className="absolut top-[100px] left-0 bg-custom-white laptop:hidden">
          <nav className="">
            <ul className="">
              {linkArr?.map((elem) => (
                <li key={elem}>
                  <Link
                    to={elem}
                    activeClass="active"
                    className="link capitalize cursor-pointer"
                    smooth
                    delay={1000}
                  >
                    {elem}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="">
            <div>
              <ul className="flex flex-col items-center gap-x-5 text-custom-white uppercase">
                <li className="w-full cursor-pointer link">uz</li>
                <li className="w-full cursor-pointer link">eng</li>
                <li className="w-full cursor-pointer link">ru</li>
              </ul>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-5 pb-5 text-link-text py-2">
              <Telegram/>
              <Instagram/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
