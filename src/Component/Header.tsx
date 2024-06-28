import { FaBell, FaSearch } from "react-icons/fa";
import Icon from "../assets/icon.png";
const Header = () => {
  return (
    <header className="bg-[#F2F2F2] shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#2A2A2A]" />
          <input
            type="text"
            placeholder="Search"
            className="p-2 pl-10 border text-[#2A2A2A] placeholder:text-[#2A2A2A] bg-transparent border-gray-300 rounded-full"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <FaBell className="text-[#717171] hover:text-gray-900 cursor-pointer" />
        <div className="relative">
          <img
            src={Icon}
            alt="User Profile"
            className="rounded-full h-10 w-10 object-cover"
          />
        </div>
        <p className="text-[#2A2A2A]  font-[500] text-[14px]">Lagos State</p>
      </div>
    </header>
  );
};

export default Header;
