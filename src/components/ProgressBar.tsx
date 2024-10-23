import { ProgressBarInputs } from "../types/types";

const ProgressBar = ({ percentage, progressColor }: ProgressBarInputs) => {
  return (
    <div className="md:w-full w-80%">
      <div className="md:w-full w-80% bg-[#F1F1F1] rounded-full h-4  relative">
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
