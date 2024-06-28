import { FaAngleDoubleRight } from "react-icons/fa";
import DashboardLayout from "../Layout/DashboardLayout.tsx";
import icon from "../assets/Man-Raising-Hand-2--Streamline-Emoji.svg.svg";
import SelectInput from "../Component/SelectInput.tsx";
import { SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import Chart from "../assets/Chart Container.svg";
const Dashboard = () => {
  const userType = "admin";
  const [role, setRole] = useState("");

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    setRole(event.target.value);
    console.log(role);
  };

  return (
    <DashboardLayout userType={userType}>
      <div className="">
        <div className="">
          <div className=" flex items-center gap-[8px]">
            <p className=" font-[400] text-[28px] text-[#2A2A2A]">
              Hello,{" "}
              <span className=" font-[600] text-[32px]">Lagos State</span>
            </p>
            <img src={icon} alt="" />
          </div>
          <p className=" font-[400] text-[16px] text-[#2A2A2A] mt-[8px]">
            This is your tax app dashboard. Start or review your activities
            here.
          </p>
        </div>

        <div className=" border rounded-[16px] border-[#E7E7E7] px-[24px] pb-[10px] pt-[32px] my-[35px]">
          <div className=" grid gap-[16px] lg:flex items-center justify-between ">
            <p className=" font-[600] text-[#012320] text-[20px]">Overview</p>

            <p className=" text-[#797889] font-[500] text-[14px] flex items-center gap-[16px]">
              Year in view:
              <SelectInput
                name="role"
                label="Role"
                value={role}
                onChange={handleSelectChange}
                options={[
                  { value: "2024", label: "2024" },
                  { value: "2025", label: "2025" },
                  { value: "2026", label: "2026" },
                ]}
                placeholder="Select your role"
              />
            </p>
          </div>
          <div className=" grid gap-[16px] md:grid-cols-2 items-center place-items-center lg:grid-cols-4 mt-[34px]">
            <div className=" rounded-[10px] bg-[#2A2A2A] px-[16px] py-[24px] min-h-[153px] w-full max-w-[240px]  text-white">
              <p className=" font-[500] text-[16px]">Total Users</p>
              <p className=" mt-[18px] font-[600] text-[32px]">120k</p>
            </div>
            <div className=" rounded-[10px] bg-[#E7E7E7] px-[16px] py-[24px] min-h-[153px]  w-full max-w-[240px]  text-[#2A2A2A]">
              <p className=" font-[500] text-[16px]">Total Returns Filed</p>
              <p className=" mt-[18px] font-[600] text-[32px]">₦120.02M</p>
            </div>
            <div className=" rounded-[10px] bg-[#E7E7E7] px-[16px] py-[24px] min-h-[153px]  w-full max-w-[240px]  text-[#2A2A2A]">
              <p className=" font-[500] text-[16px]">Tax Owed</p>
              <p className=" mt-[18px] font-[600] text-[32px]">₦ 18.07M</p>
            </div>
            <div className=" rounded-[10px] bg-[#E7E7E7] px-[16px] py-[24px] min-h-[153px]  w-full max-w-[240px]  text-[#2A2A2A]">
              <p className=" font-[500] text-[16px]">Total Assessments</p>
              <p className=" mt-[18px] font-[600] text-[32px]">₦ 218M</p>
            </div>
          </div>
          <div className=" mt-[16px] flex items-center justify-end">
            <div className=" flex items-center gap-[8px] text-[#595959] py-[8px] px-[6px]">
              <p className=" font-[500] text-[14px]">See All</p>
              <FaAngleDoubleRight />
            </div>
          </div>
        </div>

        <div className=" border rounded-[16px] border-[#E7E7E7] px-[24px] pb-[10px] pt-[32px] my-[35px]">
          <div className=" grid gap-[16px] lg:flex items-center justify-between mt-[24px]">
            <p className=" font-[600] text-[#343A40] text-[16px]">
              Tax Returns
            </p>
            <p className=" text-[#797889] font-[500] text-[14px] flex items-center gap-[16px]">
              Year in view:
              <SelectInput
                name="role"
                label="Role"
                value={role}
                onChange={handleSelectChange}
                options={[
                  { value: "2024", label: "2024" },
                  { value: "2025", label: "2025" },
                  { value: "2026", label: "2026" },
                ]}
                placeholder="Select your role"
              />
            </p>
          </div>

          <div className="mt-8">
            <div className="border rounded-lg border-gray-300 p-4">
              <img src={Chart} alt="" />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
