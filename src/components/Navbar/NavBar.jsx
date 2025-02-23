import React from "react";

const NavBar = ({prob}) => {
  return (
    <div className="">
    <ul className={`flex ${prob} lg:flex-row max-lg:flex-col text-16 space-x-10 font-Urbanist text-lg`}>
      <li className="hover:text-[#525de0] cursor-pointer">Home</li>
      <li className="hover:text-[#525de0] cursor-pointer">My Order</li>
      <li className="hover:text-[#525de0] cursor-pointer">Blog</li>
      <li className="hover:text-[#525de0] cursor-pointer">Team</li>
      <li className="hover:text-[#525de0] cursor-pointer">About Us</li>
      <li className="hover:text-[#525de0] cursor-pointer">Contact Us</li>
    </ul>
    </div>
  );
};

export default NavBar;
