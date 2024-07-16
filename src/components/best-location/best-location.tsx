import { useEffect, useState } from "react";
import SlideCard from "../slide-card/slide-card";

export interface ISlideCard {
  id: string;
  link: string;
  title: string;
  itemWidth: boolean,
  population: string;
}

const BestLocation = () => {

  const [width, setWidth] = useState(window.innerWidth);
  const [widthCount, setWidthCount] = useState(3)

  useEffect(() => {
    const newWidth = window.innerWidth 
    setWidth(newWidth);

    if(newWidth > 718){
      setWidthCount(5)
    }else if(newWidth <= 718 && newWidth > 638){
      setWidthCount(4)
    }else{
      setWidthCount(3)
    }
    
  }, [width]);

    const [data, setData] = useState<ISlideCard[]>([
        {
          id: "1",
          link: "https://zamontour.uz/assets/images/dubai2.jpg",
          title: "Dubai",
          itemWidth: true,
          population: "2M",
        },
        {
          id: "2",
          link: "https://zamontour.uz/assets/images/sharm.jpg",
          title: "Antalya",
          itemWidth: false,
          population: "3.5M",
        },
        {
          id: "3",
          link: "https://zamontour.uz/assets/images/dubai2.jpg",
          title: "Istanbul",
          itemWidth: false,
          population: "4.1M",
        },
        {
          id: "4",
          link: "https://zamontour.uz/assets/images/sharm.jpg",
          title: "Sharm EI-Sheikh",
          itemWidth: false,
          population: "4M",
        },
        {
          id: "5",
          link: "https://zamontour.uz/assets/images/dubai2.jpg",
          title: "Paris",
          itemWidth: false,
          population: "3M",
        },
      ])

  const onChangeWidth = (e: any) => {
    if(e.target.className.includes("item-card")){
      const newData = data?.map((elem) => ({
        ...elem,
        itemWidth: elem.id === e.target.id,
      }));

      setData(newData);
    }
  };

  return (
    <div className="py-10">
      <div className="container mx-auto">
        <div className="max-w-[60%] text-center mx-auto mb-20">
          <h2 className="mb-5 text-3xl font-bold capitalize text-link-text">
            Best Location
          </h2>
          <p className="text-[15px] text-text">
            Discover the best offers in each city, curated just for you. Immerse
            yourself in a world of savings and indulge in unparalleled
            experiences.
          </p>
        </div>

        <div
          className="max-w-[616px] mx-auto relative flex gap-x-[10px]"
          onClick={(e) => onChangeWidth(e)}
        >
          {data?.slice(0, widthCount)?.map((item) => {
            return <SlideCard item={item} key={item.id}/>;
          })}
        </div>
      </div>
    </div>
  );
};

export default BestLocation;
