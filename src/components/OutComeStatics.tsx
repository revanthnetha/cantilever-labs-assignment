import React from "react";
import { cartOutcome } from "../assets";
import { OutcomeStaticsData } from "../data/data";
import ProgressBar from "./ProgressBar";

const OutComeStatics = () => {
  return (
    <div>
      <div className="text-Suprema font-semibold md:text-[20px] text-[18px] leading-6 text-[#404040] mb-4">
        Outcome Statistics
      </div>
      {OutcomeStaticsData.map((item, index) => (
        <div key={index} className="mb-2">
          <div className="flex gap-2 items-center">
            <div>
              <img
                className={`p-2 rounded-md bg-[${item.bgiconcolor}] w-[42.14px] h-[43.44px] shadow-md`}
                src={item.icon}
                alt="icon"
              />
            </div>
            <ProgressBar percentage={item.percentage} progressColor={item.progressColor}/>
              <div className="font-Suprema text-[#AEAEAE] font-normal text-[14px] absolute left-10 transform -translate-x-1/2 mt-1">
                {item.name}
              </div>
            <div className="font-sans font-semibold text-[24px] text-[#696969] ">
              {item.percentage}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OutComeStatics;
