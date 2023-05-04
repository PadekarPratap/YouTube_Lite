import React, { useState } from "react";
import YTLogo from "../assets/images/yt-logo.png";
import YTLogoMobile from "../assets/images/yt-logo-mobile.png";
import { FiSearch } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { BiVideoPlus } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";
import { RiMenuFill } from "react-icons/ri";
import Avatar from '/Avatar.png'
import { Link } from "react-router-dom";

const Navbar = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="w-full h-14 bg-ytBlack flex items-center px-[2%] justify-between">
      {/* left section  */}
      <div className="flex items-center gap-2">
        <RiMenuFill className="md:hidden" color="#fff" size={25} />
        <Link to={'/'}>
        <img src={YTLogo} alt="logo" className="w-28 hidden md:block" />
        <img src={YTLogoMobile} alt="logo" className="w-[2.5rem] md:hidden" />
        </Link>
      </div>

      {/* middle section  */}
      <div className="flex items-center justify-center w-[60%] relative">
        <input
          type="text"
          className="px-4 py-1 rounded-tl-full rounded-bl-full focus:outline-none bg-ytBlack border border-[#2e2e2e] text-white focus:border-[#1b5cae] w-[70%]"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="bg-ytGray h-[34px] w-[60px] flex justify-center items-center rounded-tr-full rounded-br-full">
          <FiSearch color="#fff" />
        </button>

        {/* cross icon  */}
        {search && <div className="absolute md:right-[20%] right-[30%] cursor-pointer hover:bg-[#222222] w-[30px] h-[30px] rounded-full flex items-center justify-center">
          <RxCross2 color="#fff" onClick={() => setSearch('')} />
        </div>}
      </div>

      {/* right section  */}
      <div className="flex gap-5">
        {/* video icon  */}
        <div className="w-[40px] h-[40px] rounded-full bg-ytGray items-center justify-center cursor-pointer md:flex hidden">
            <BiVideoPlus color="#fff" size={25} />
        </div>

        {/* notification icon  */}
        <div className="w-[40px] h-[40px] rounded-full bg-ytGray items-center justify-center cursor-pointer md:flex hidden">
            <IoMdNotifications color="white" />
        </div>

        {/* avatar  */}
        <div className="w-[40px] h-[40px] rounded-full bg-ytGray flex items-center justify-center cursor-pointer">
            <img src={Avatar} className="w-full h-full" alt="" />
        </div>

      </div>
    </div>
  );
};

export default Navbar;
