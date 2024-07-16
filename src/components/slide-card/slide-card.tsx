import screenIcon from "../../assets/icons/screen.svg";
import { ISlideCard } from "../best-location/best-location";

const SlideCard = ({item}: {item: ISlideCard}) => {
  return (
    <div id={item.id} className={`${item.itemWidth ? "w-[600px]" : "w-[60px]"} item-card transition-transform duration-500 ease-in-out item-card h-[400px] cursor-pointer bg-[url('${item?.link}')] bg-no-repeat bg-cover bg-center flex items-end justify-start p-2 rounded-[30px]`}>
      <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full icon" aria-disabled>
        <img src={screenIcon} alt="screen icon" />
      </div>
      <div></div>
    </div>
  );
};

export default SlideCard;
