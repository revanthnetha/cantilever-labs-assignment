import ToggleButton from "./ToggleButton";
import ProgressBar from "./ProgressBar";
import CardCarousel from "./CardCarousel";

const Cards = () => {
  const percentage = (350.6 / 4000) * 100;
  return (
    <div
      className="rounded-2xl shadow-md p-4 sm:w-[600.66px] w-[400px] "
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 100%)",
      }}
    >
      <div className="text-Suprema font-semibold md:text-[20px] text-[18px] leading-6 text-[#404040] mb-4">
        Cards
      </div>

      <div className="flex justify-between">
        <div>
          <CardCarousel />
          <div>
            <ProgressBar
              percentage={percentage.toString() + "%"}
              progressColor={"#197BBD"}
            />
          </div>
          <div className="flex justify-between mt-4">
            <div className="font-Suprema font-normal text-[14px] text-[#AEAEAE]">
              Weekly payment limit
            </div>
            <div className="text-Suprema font-semibold md:text-[14px] text-[12px] text-[#404040]">
              $350.60 / $4000
            </div>
          </div>
        </div>

        <div className="text-right">
          <div className="mb-4">
            <div className="font-sans font-semibold text-[#197BBD]">
              <span className="md:text-[18px] text-[14px] ">$ </span>
              <span className="md:text-[31px] text-[22px]">2850.75</span>
            </div>
            <div className="font-Suprema font-normal text-[14px] text-[#AEAEAE]">
              Current balance
            </div>
          </div>
          <div className="font-sans font-semibold text-[#439A86] mb-4">
            <div>
              <span className="text-[18px]">$</span>{" "}
              <span className="md:text-[28.55px] text-[18px]"> 1500.50</span>
            </div>
            <div className="font-Suprema font-normal text-[14px] text-[#AEAEAE]">
              Income
            </div>
          </div>
          <div className="font-sans font-semibold text-[#BB4430] mb-6">
            <div>
              <span className="text-[18px]">$</span>
              <span className="md:text-[24.55px] text-[18px]"> 350.60</span>
            </div>
            <div className="font-Suprema font-normal text-[14px] text-[#AEAEAE]">
              Outcome
            </div>
          </div>

          <div className="font-sans font-semibold text-[#BB4430]">
            <ToggleButton />
            <div className="font-Suprema font-normal text-[14px] text-[#AEAEAE] mt-2">
              Deactive card
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
