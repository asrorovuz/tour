import { Link } from "react-scroll";
import afrImg from "../../assets/images/afr.jpg";
import airplaneImg from "../../assets/images/airplane.jpg";

const About = () => {
  return (
    <div id="about" className="pt-10">
      <div className="container mx-auto">
        <div className="mobile:max-w-[1100px] mb-20">
          <h2 className="mb-5 text-3xl font-bold capitalize text-link-text">
            Explore Destinations With Ease
          </h2>
          <p className="text-[15px] text-text leading-[30px]">
            Find the best deals on railway and airplane tickets in each city,
            carefully selected for you.
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
                  Cheap Railway Tickets With Us
                </h3>
                <span className="text-[15px] text-text ">Whole world</span>
              </div>
              <div>
                <Link
                  to="contacts"
                  smooth
                  className="mx-auto text-[14px] py-3 px-[30px] rounded-[25px] tracking-[0.5px] bg-gren-blue transition text-white cursor-pointer hover:opacity-80"
                >
                  Explore More
                </Link>
              </div>
            </div>
            <p className="my-[18px] text-text text-[15px] leading-[30px]">
              Embark on a railway adventure and explore destinations worldwide.
              Whether it's the picturesque landscapes, bustling cities, or
              cultural gems, our rail services offer a unique and comfortable
              way to traverse the globe. Immerse yourself in the beauty of
              different cultures, all accessible through our extensive railway
              network. .
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
                  Discover Exciting Air Travel Deals
                </h3>
                <span className="text-[15px] text-text ">
                  Global Destinations
                </span>
              </div>
              <div>
                <Link
                  to="contacts"
                  smooth
                  className="mx-auto text-[14px] py-3 px-[30px] rounded-[25px] tracking-[0.5px] bg-gren-blue transition text-white cursor-pointer hover:opacity-80"
                >
                  Explore More
                </Link>
              </div>
            </div>
            <p className="my-[18px] text-text text-[15px] leading-[30px]">
              Embark on an airborne adventure and explore destinations
              worldwide. Whether it's the breathtaking landscapes, vibrant
              cities, or cultural treasures, our airline services provide a
              convenient and exhilarating way to navigate the globe. Immerse
              yourself in the richness of diverse cultures, all easily
              accessible through our extensive air travel network. .
            </p>
          </div>
        </div>

        {/* <div className="mobile:max-w-[1100px] laptop:max-w-[48%] mb-20">
          <h2 className="mb-5 text-3xl font-bold capitalize text-link-text">
            Visit One Of Our Countries Now
          </h2>
          <p className="text-[15px] text-text leading-[30px]">
            Discover the best offers in each city, curated just for you. Immerse
            yourself in a world of savings and indulge in unparalleled
            experiences.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default About;
