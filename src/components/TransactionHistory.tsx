import React from "react";
import { TransactioHistoryData } from "../data/data";

const TransactionHistory = () => {
  return (
    <div className="w-[400px] md:w-[550px] rounded-[20px] shadow-md p-4">
        <div className="text-Suprema font-semibold md:text-[20px] text-[18px] text-[#404040]">
        Transaction history
        </div>
    <div className="overflow-x-auto">
      <table>
        <thead>
          <tr>

            <th className="px-4 py-2 text-left text-sm font-normal text-[#AEAEAE]">
             Receiver
            </th>
            <th className="px-4 py-2 text-left text-sm font-normal text-[#AEAEAE]">
              Type
            </th>
            <th className="px-4 py-2 text-left text-sm font-normal text-[#AEAEAE]">
              Date
            </th>
            <th className="px-4 py-2 text-left text-sm font-normal text-[#AEAEAE]">
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {TransactioHistoryData.map((transaction, index) => (
            <tr key={index} className="hover:bg-gray-50 border-b-[0.5px] border-[#ECECEC]">
              <td className="px-4 py-2 font-suprema font-normal text-sm text-[#404040] flex gap-1 items-center leading-4">
            <img src={transaction.img} className="p-2 rounded-2xl bg-[#EFEFEF]" />
                {transaction.receiver}
              </td>
              <td className="font-Suprema px-4 py-2 text-sm font-normal text-[#C7C7C7]">
                {transaction.type}
              </td>
              <td className="font-Suprema px-4 py-2 text-sm font-normal text-[#C7C7C7]">
                {transaction.date}
              </td>
              <td className="font-sans text-right font-bold px-4 py-2 text-sm text-[#404040]">
                {transaction.amount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default TransactionHistory;
