import GoalsCard from "./GoalsCard";
import { GoalsCardData } from "../data/data";
import { plus } from "../assets";

const Goals = () => {
  return (
    <div className="sm:w-full w-80%">
      <div className="font-Suprema flex gap-1 font-semibold text-[20px] text-[#404040] items-center ml-4 lg:justify-start mb-4">
        Goals
        <img src={plus} alt="plus-icon" className="w-[24px] h-[24px]" />
      </div>
      <div className="flex sm:gap-4 gap-1 items-center justify-center lg:justify-start">
        {GoalsCardData.map((item, index) => (
          <GoalsCard
            key={index}
            value={item.value}
            name={item.name}
            date={item.date}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Goals;
