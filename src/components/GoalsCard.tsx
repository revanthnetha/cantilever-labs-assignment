import { GoalsInputData } from "../types/types";

const GoalsCard = ({value, name, date, img}:GoalsInputData) => {
  return (
    <div className="shadow-lg gap-0 rounded-[28px] flex flex-col  md:w-[157.93px]  md:h-[168.74px] p-4">
        <div className="font-sans font-semibold md:text-[23px] text-[20px] text-[#696969]">{value}</div>
        <div className="font-Suprema font-normal md:text-[14px] text-[12px] text-[#AEAEAE] mb-7">{date}</div>
        <img className="w-[30px] h-[24px] mb-1" src={img}/>
        <div className="font-Suprema font-normal md:text-[20px] text-[18px] text-[#404040]">{name}</div>
    </div>
  );
};

export default GoalsCard;
