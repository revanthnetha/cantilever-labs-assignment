import React from "react";
import { plus } from "../assets";
import { NewTransactionData } from "../data/data";
import { Loan } from "../assets";

const NewTransaction = () => {
  return (
    <div className="flex gap-1 items-center">
    <div className="flex flex-col rounded-lg shadow-lg w-[342.51px] h-[180px] p-4">
      <div className="text-Suprema font-semibold md:text-[20px] text-[18px] leading-6 text-[#404040] mb-4">
        New Transaction
      </div>
      <div className="flex gap-2">
        {NewTransactionData.map((item, index) => (
          <div
            className="flex flex-col items-center justify-center"
            key={index}
          >
            <img src={item.img} className="w-[42.14px] h-[42.14px]" />
            <div className="font-normal font-Suprema text-[12px] text-[#404040]">
              {item.name}
            </div>
          </div>
        ))}
        <div className="flex flex-col items-center justify-center hover:cursor-pointer">
          <img src={plus} alt="icon" />
          <div className="font-normal font-Suprema text-[12px] text-[#404040]">
            Add New
          </div>
        </div>
      </div>
      <div className="flex gap-1 mt-3">
        <input
          type="text"
          placeholder="0"
          className="w-[170px] p-2 border  border-gray-300 rounded-md text-right pr-10 placeholder:text-left placeholder:text-[#C7C7C7]  focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span className="relative inset-y-0 right-8  flex items-center pointer-events-none text-[#C7C7C7] ">
          $
        </span>
        <button className="w-[150px] h-[36px] bg-[#FFC145] rounded-[14px] flex gap-2 justify-center items-center">
          <text className="font-sans font-semibold text-[12px] w-[95px] ">
            Send the transfer
          </text>
          <img src={plus} alt="to-icon" />
        </button>
      </div>
    </div>
    <div className="flex items-center justify-center flex-col ">
        <img src={Loan} alt="loan-icon" className="mt-6"  />
    </div>
    </div>
  );
};

export default NewTransaction;
