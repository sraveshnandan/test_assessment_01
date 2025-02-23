import React from "react";
import Maincard from "./Maincard";
import { FaArrowUp } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="bg-[url('/src/assets/hero-bg.jpg')] bg-cover pt-20 bg-center sm:bg-contain md:bg-cover w-full">
      <Maincard className="" />

      <FaArrowUp className=" text-white bg-[#ffa31a] rounded-full text-5xl p-3 fixed bottom-8 right-8 cursor-pointer" />
    </div>
  );
};

export default Header;
