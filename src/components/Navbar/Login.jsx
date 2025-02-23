import React from "react";
import Navmenu from "./Navmenu";
import { MdOutlinePersonOutline } from "react-icons/md";

const Login = () => {
  return (
    <div className="inline-flex items-center space-x-4">
      <div className="max-md:hidden flex items-center space-x-2 text-2xl leading-12 font-Urbanist text-white bg-[#525de0] px-3 py-1 rounded-md shadow-sm shadow-blue-800 hover:bg-[#231f41] cursor-pointer">
        <MdOutlinePersonOutline />
        <span>Login</span>
      </div>
      <div className="logicon md:hidden bg-white px-1 sm:px-3 py-1 leading-12 rounded-md shadow-sm shadow-gray-500 cursor-pointer">
      <MdOutlinePersonOutline className='text-3xl sm:text-5xl text-[#525de0] ' />
      </div>
      <Navmenu/>
    </div>
  );
};

export default Login;
