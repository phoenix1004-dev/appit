import { mask3 } from "../../../assets/image";
import { FEATURE_DATA } from "../../../types";

type GridItemProps = {
  item: FEATURE_DATA;
};

const GridItem: React.FC<GridItemProps> = ({ item }) => {
  return (
    <div className="border border-solid border-[#1d1d20] rounded-[20px] flex flex-col w-full">
      <div className="w-full h-[240px] relative">
        <img
          className="w-full h-auto max-h-full p-[14px]"
          src={item.img}
          alt={item.title}
        />
        <img
          className="w-full h-[175px] absolute left-1 right-1 bottom-0"
          src={mask3}
          alt="mask3"
        />
      </div>
      <div className="flex flex-col gap-[8px] px-[10px] py-[30px] pb-[24px]">
        <div className="flex gap-[6px] items-center">
          <h1 className="text-[20px] font-semibold">{item.title}</h1>
        </div>
        <p className="text-[18px] text-[#797b85]">{item.desc}</p>
      </div>
    </div>
  );
};

export default GridItem;
