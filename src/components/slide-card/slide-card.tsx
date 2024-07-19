import screenIcon from "../../assets/icons/screen.svg";
import { ISlideCard } from "../best-location/best-location";

const SlideCard = ({ item }: { item: ISlideCard }) => {
  return (
    <div
      id={item.id}
      className={`${
        item.itemWidth ? "w-[600px]" : "w-[60px]"
      } item-card transition-transform duration-500 ease-in-out h-[400px] cursor-pointer bg-[url('${
        item?.link
      }')] bg-no-repeat bg-cover bg-center flex items-end justify-start p-2 rounded-[30px]`}
    >
      <div className="flex items-center gap-x-2">
        <div
          className="bg-white w-10 h-10 flex items-center justify-center rounded-full icon"
          aria-disabled
        >
          <img src={screenIcon} alt="screen icon" />
        </div>
        <div
          className={`${
            item.itemWidth
              ? ""
              : "hidden"
          }`}
        >
          <h3 className="text-xl font-bold text-white">{item.title}</h3>
          <p className="text-white text-[14px] font-medium">
            Population: {item.population}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SlideCard;
