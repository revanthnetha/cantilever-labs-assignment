import Goals from "../components/Goals";
import TransactionHistory from "../components/TransactionHistory";
import OutComeStatics from "../components/OutComeStatics";
import NewTransaction from "../components/NewTransaction";
import Cards from "../components/Cards";

const Dashboard = () => {
  return (
    <div className="md:ml-64 p-4 ">
      <div className="flex items-center justify-center 2xl:items-start 2xl:justify-start 3xl:items-start 3xl:justify-start flex-col text-left ">
        <div className="text-Suprema font-semibold md:text-[43px] text-[36px] text-[#404040] ">
          Weekly sumup
        </div>
        <div className="text-Suprema font-normal md:text-[16px] text-[14px] text-[#AEAEAE]">
          Get summary of your weekly online transactions here.
        </div>
      </div>
      <div className="flex-col gap-10 xl:flex-row flex items-center justify-center ">
        <div className="flex flex-col gap-2">
          <Cards />
          <TransactionHistory />
        </div>
        <div className="flex flex-col gap-10  items-center justify-center">
          <Goals />
          <OutComeStatics />
          <NewTransaction />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
