import React, { ReactNode } from "react";
import Header from "../Component/Header";
import Sidebar from "../Component/Sidebar";
import Support from "../assets/help & support.svg";

interface DashboardLayoutProps {
  children: ReactNode;
  userType: string;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  userType,
}) => {
  return (
    <div className="flex h-screen overflow-hidden relative">
      <Sidebar userType={userType} />
      <div className="flex-1 flex flex-col overflow-hidden relative">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 bg-[#FFFFFF] rounded-[15px] relative">
          <div className="bg-white">{children}</div>
        </main>
      </div>
      <div className="absolute bottom-4 right-4">
        <img src={Support} alt="" />
      </div>
    </div>
  );
};

export default DashboardLayout;
