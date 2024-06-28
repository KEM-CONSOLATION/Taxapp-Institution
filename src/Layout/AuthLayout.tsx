import React, { ReactNode } from "react";
import Logo from "../assets/taxapp_logo.svg";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#E7E7E7]">
      <div className="mb-4">
        <img src={Logo} alt="Logo" className="" />
      </div>
      <div className=" bg-white py-[40px] px-[32px] rounded-[10px] border border-[#D2D2E0] shadow-md flex flex-col items-center">
        <div className="w-full lg:min-w-[300px]">
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
