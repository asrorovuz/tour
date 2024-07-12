import { Link } from "react-scroll";
import logo from "../../assets/logo.svg";
import { CloseIcon, ToggleIcon } from "../icon";
import { useState } from "react";

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const linkArr: string[] = ["home", "about", "tours", "contacts"];

  return (
    <div className="min-h-[70px] bg-gren-blue fixed w-full">
      <div className="container mx-auto">
        <div className="py-[15px] w-full flex items-center justify-between">
          <div className="flex items-center justify-between w-full">
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

          <div className="hidden laptop:block">
            <nav className="">
              <ul className="flex items-center">
                {linkArr?.map((elem) => (
                  <li className="px-[15px]">
                    <Link
                      to={elem}
                      activeClass="active"
                      className="link capitalize laptop:text-custom-white laptop:border-0"
                      smooth
                      delay={1000}
                    >
                      {elem}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {isOpenMenu && (
        <div className="absolut top-[100px] left-0 bg-custom-white laptop:hidden">
          <nav className="">
            <ul className="">
              {linkArr?.map((elem) => (
                <li className="px-[15px]">
                  <Link
                    to={elem}
                    activeClass="active"
                    className="link capitalize laptop:text-custom-white laptop:border-0"
                    smooth
                    delay={1000}
                  >
                    {elem}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
