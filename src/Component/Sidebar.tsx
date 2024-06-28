import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/taxapp_logo.svg";
import {
  MdOutlineDashboard,
  MdOutlineLogout,
  MdSegment,
  MdSupportAgent,
} from "react-icons/md";

interface SidebarProps {
  userType: keyof typeof menuItems;
}

interface MenuItem {
  name: string;
  path?: string;
  icon: JSX.Element;
}

interface UserTypeMenu {
  items: MenuItem[];
  common: MenuItem[];
}

const menuItems: Record<string, UserTypeMenu> = {
  admin: {
    items: [
      { name: "Dashboard", path: "/dashboard", icon: <MdOutlineDashboard /> },
      { name: "Help & Support", path: "/support", icon: <MdSupportAgent /> },
    ],
    common: [
      {
        name: "Admin Quick Menu",
        path: "/quickMenu",
        icon: <MdSegment />,
      },
      { name: "Sign Out", icon: <MdOutlineLogout /> },
    ],
  },
  user: {
    items: [
      { name: "Home", path: "/dashboard", icon: <MdOutlineDashboard /> },
      { name: "Help & Support", path: "/support", icon: <MdSupportAgent /> },
    ],
    common: [
      { name: "User Settings", path: "/user-settings", icon: <MdSegment /> },
      { name: "Sign Out", icon: <MdOutlineLogout /> },
    ],
  },
};

const Sidebar: React.FC<SidebarProps> = ({ userType }) => {
  const history = useNavigate();
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  const { items, common } = menuItems[userType];

  const handleSignOut = () => {
    localStorage.clear();
    history("/");
  };

  const handleItemClick = (path?: string) => {
    if (path) {
      setActivePath(path);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-between bg-[#F2F2F2] w-64">
      <div>
        <div className="p-4">
          <img src={Logo} alt="Logo" />
        </div>
        <nav className="mt-4 grid gap-[12px]">
          {items.map((item) =>
            item.path ? (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-[12px] px-[18px] py-[8px] text-[#717171] hover:bg-[#2EAB8D] hover:text-white ${
                  activePath === item.path ? "bg-[#2EAB8D] text-white" : ""
                }`}
                onClick={() => handleItemClick(item.path)}
              >
                {item.icon}
                <p className="font-[400] text-[15px]">{item.name}</p>
              </Link>
            ) : (
              <div
                key={item.name}
                className={`flex items-center gap-[12px] px-[18px] py-[8px] text-[#717171] hover:bg-[#2EAB8D] hover:text-white cursor-pointer ${
                  activePath === item.path ? "bg-[#2EAB8D] text-white" : ""
                }`}
                onClick={item.name === "Sign Out" ? handleSignOut : undefined}
              >
                {item.icon}
                <p className="font-[400] text-[15px]">{item.name}</p>
              </div>
            )
          )}
        </nav>
      </div>
      <div className="p-4 grid gap-[12px]">
        {common.map((item) =>
          item.path ? (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-[12px] px-[18px] py-[8px] text-[#717171] hover:bg-[#2EAB8D] hover:text-white ${
                activePath === item.path ? "bg-[#2EAB8D] text-white" : ""
              }`}
              onClick={() => handleItemClick(item.path)}
            >
              {item.icon}
              <p className="font-[400] text-[15px]">{item.name}</p>
            </Link>
          ) : (
            <div
              key={item.name}
              className={`flex items-center gap-[12px] px-[18px] py-[8px] text-[#717171] hover:bg-[#2EAB8D] hover:text-white cursor-pointer ${
                activePath === item.path ? "bg-[#2EAB8D] text-white" : ""
              }`}
              onClick={item.name === "Sign Out" ? handleSignOut : undefined}
            >
              {item.icon}
              <p className="font-[400] text-[15px]">{item.name}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Sidebar;
