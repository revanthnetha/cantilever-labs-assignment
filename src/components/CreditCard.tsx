import { cardbg } from "../assets";

const CreditCard = () => {
  return (
    <div
      className="sm:w-[320.43px] md:h-[206.17px] w-[240px] h-[180px] rounded-[26px] p-4 shadow-md"
      style={{
        background: "linear-gradient(180deg, #197BBD 0%, #3391D0 100%)",
      }}
    >
      <div className="font-Quicksand font-semibold text-[17px] text-[#FFFFFF] text-left">
        cloudcash
      </div>
      <div className="font-sans font-semibold text-[8px] text-left mb-8 text-[#FFFFFF63]">
        PREMIUM ACCOUNT
      </div>

      <div className="font-Quicksand font-medium md:text-[21px] text-[14px] text-[#FFFFFF] mb-8">
        5789 &nbsp; &nbsp; * * * * &nbsp; &nbsp; * * * * &nbsp; &nbsp; 2847
      </div>

      <div className="flex gap-8">
        <div>
          <div className="font-sans font-medium text-[7px] text-[#FFFFFF] mb-1">
            Card holder
          </div>
          <div className="font-sans font-medium text-[12px] text-[#FFFFFF]">
            Mike Smith
          </div>
        </div>

        <div>
          <div className="font-sans font-medium text-[7px] text-[#FFFFFF] mb-1">
            Expire date
          </div>
          <div className="font-sans font-medium text-[12px] text-[#FFFFFF]">
            06/21
          </div>
        </div>
      </div>
      <div className="relative left-24 bottom-28 ">
        <img src={cardbg} alt="" />
      </div>
    </div>
  );
};

export default CreditCard;
