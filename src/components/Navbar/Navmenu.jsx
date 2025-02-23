import React from "react";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";

const Navmenu = () => {
 
  return (
    <div>
      <div
        className="menu lg:hidden bg-white px-1 sm:px-3 py-1 leading-12 rounded-md shadow-sm shadow-gray-500 cursor-pointer">
        <IoIosMenu className="text-3xl sm:text-5xl text-[#525de0]" />
      </div>
    </div>
  );
};

export default Navmenu;
