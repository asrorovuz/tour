import { Link } from "react-scroll";

const Reservation = () => {
  return (
    <div className="bg-[url('./src/assets/images/heading-bg-02.jpg')] bg-center bg-no-repeat bg-cover pt-64 pb-48">
      <div className="container mx-auto">
        <div className="text-white flex flex-col items-center text-center">
          <h4 className="capitalize text-xl font-medium mb-[15px] pb-[25px]">
            Book Prefered Deal Here
          </h4>
          <div className="h-[1px] bg-text w-40"></div>
          <h2 className="capitalize text-[50px] font-bold mb-[30px]">
            Make Your Reservation
          </h2>
          <Link
            to="contacts"
            smooth
            className="text-[14px] border border-gren-blue py-3 px-[30px] rounded-[25px] font-medium capitalize tracking-[0.5px] cursor-pointer bg-white text-gren-blue hover:text-white hover:bg-gren-blue transition"
          >
            Discover More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
