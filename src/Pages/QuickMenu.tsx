import { MdOutlineGroups } from "react-icons/md";
import DashboardLayout from "../Layout/DashboardLayout.tsx";

const QuickMenu = () => {
  const userType = "admin";
  return (
    <DashboardLayout userType={userType}>
      <div className=" grid gap-[16px] ">
        <div className=" w-full max-w-[305px] min-h-[303px] rounded-[10px] border border-[#B8B8B8] px-[16px] py-[84px]">
          <div className=" grid gap-[40px] items-center place-items-center">
            <MdOutlineGroups className="  w-[72px] h-[72px] text-[#2EAB8D]" />
            <p className=" font-[600] text-[20px] text-[#012320]"> Add Users</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default QuickMenu;
