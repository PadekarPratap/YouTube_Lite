import React, { useState } from "react";
import YTLogo from "../assets/images/yt-logo.png";
import YTLogoMobile from "../assets/images/yt-logo-mobile.png";
import { FiSearch } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { BiVideoPlus } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";
import { RiMenuFill } from "react-icons/ri";
import Avatar from "/Avatar.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_SIDEBAR, SET_SEARCH_QUERY } from "../redux/youtubeSlice";

const Navbar = () => {
  const searchQuery = useSelector((state) => state.Youtube.searchQuery)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSearch = (e) =>{
    if(e.key === "Enter"){
      navigate(`searchResults/${searchQuery}`)
      // dispatch(SET_SEARCH_QUERY(''))
    }
  }

  const handleSearchBtn = () =>{
    navigate(`searchResults/${searchQuery}`)
    // dispatch(SET_SEARCH_QUERY(''))
  }

  return (
    <div className="w-full h-14 bg-ytBlack flex items-center px-[2%] justify-between">
      {/* left section  */}
      <div className="flex items-center gap-2">
        <RiMenuFill className="md:hidden" color="#fff" size={25} onClick={() => dispatch(CHANGE_SIDEBAR())} />
        <Link to={"/"}>
          <img src={YTLogo} alt="logo" className="w-28 hidden md:block" />
          <img src={YTLogoMobile} alt="logo" className="w-[2.5rem] md:hidden" />
        </Link>
      </div>

      {/* middle section  */}
      <div className="flex items-center justify-center w-[60%]">
        <div className="w-[70%] relative">
          <input
            type="text"
            className="px-4 py-1 rounded-tl-full rounded-bl-full focus:outline-none bg-ytBlack border border-[#2e2e2e] text-white focus:border-[#1b5cae] w-full"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => dispatch(SET_SEARCH_QUERY(e.target.value))}
            onKeyUp={handleSearch}
          />
          {/* cross icon  */}
          {searchQuery && (
            <div className="absolute top-0 right-[10px] cursor-pointer hover:bg-[#222222] w-[30px] h-[30px] rounded-full flex items-center justify-center">
              <RxCross2 color="#fff" onClick={() => dispatch(SET_SEARCH_QUERY(''))} />
            </div>
          )}
        </div>
        <button className="bg-ytGray h-[34px] w-[60px] flex justify-center items-center rounded-tr-full rounded-br-full" onClick={handleSearchBtn}>
          <FiSearch color="#fff" />
        </button>
      </div>

      {/* right section  */}
      <div className="flex gap-5">
        {/* video icon  */}
        <div className="w-[40px] h-[40px] rounded-full hover:bg-ytGray items-center justify-center cursor-pointer md:flex hidden">
          <BiVideoPlus color="#fff" size={25} />
        </div>

        {/* notification icon  */}
        <div className="w-[40px] h-[40px] rounded-full hover:bg-ytGray items-center justify-center cursor-pointer md:flex hidden">
          <IoMdNotifications color="white" />
        </div>

        {/* avatar  */}
        <div className="w-[40px] h-[40px] rounded-full cursor-pointer">
          <img src={Avatar} className="w-full h-full" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
