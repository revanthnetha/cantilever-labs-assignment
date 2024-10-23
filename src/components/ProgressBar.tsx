import React from "react";
import { ProgressBarInputs } from "../types/types";

const ProgressBar = ({ percentage, progressColor }: ProgressBarInputs) => {
  return (
    <div>
      <div className="w-full bg-[#F1F1F1] rounded-full h-4  relative">
        <div
          className="h-full rounded-full transition-all duration-300"
          style={{
            width: percentage,
            background: progressColor,
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
