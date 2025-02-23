import React from 'react'
import { FaCalendarDays } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
const Maincard = () => {
  return (
    <div className='text-left p-5 sm:py-10 sm:px-15 z-40'>
        <h2 className='text-2xl font-bold  pb-5 text-[#525de0]'>Your Media Partner</h2>
        <p className='text-3xl sm:text-4xl font-bold  pb-10'>Maximize Your Reach with Media Dost</p>
        <div className="flex justify-center gap-2.5 items-center">
              <div className="card cursor-pointer relative bg-white z-0 shadow-lg sm:p-5 max-sm:p-0 rounded-xl max-sm:w-28 w-40  h-30 sm:h-52 flex flex-col justify-center items-center hover:scale-105 hover:bg-gray-200 transition-all duration-300">
              <FaCalendarDays className="text-[#525de0] text-3xl sm:text-5xl" />
              <h1 className="sm:text-2xl font-bold text-[#525de0]">Plan</h1>
              <p className="text-[#000c] max-sm:text-sm">Your Media</p>
              <FaArrowRight className="text-[#525de0] sm:text-3xl absolute left-2 bottom-2.5" />
              </div>
              <div className="card cursor-pointer relative bg-white z-0 shadow-lg sm:p-5 max-sm:p-0 rounded-xl max-sm:w-28 w-40  h-30 sm:h-52 flex flex-col justify-center items-center hover:scale-105 hover:bg-gray-200 transition-all duration-300">
              <FaSearch className="text-[#525de0] text-3xl sm:text-5xl" />
              <h1 className="sm:text-2xl font-bold text-[#525de0]">Find</h1>
              <p className="text-[#000c] max-sm:text-sm leading-6">Events</p>
              <FaArrowRight className="text-[#525de0] sm:text-3xl absolute left-2 bottom-2.5" />
              </div>
              <div className="card cursor-pointer relative bg-white z-0 shadow-lg sm:p-5 max-sm:p-0 rounded-xl max-sm:w-28 w-40  h-30 sm:h-52 flex flex-col justify-center items-center hover:scale-105 hover:bg-gray-200 transition-all duration-300">
              <FaLightbulb className="text-[#525de0] text-3xl sm:text-5xl" />
              <h1 className="sm:text-2xl font-bold text-[#525de0]">Create</h1>
              <p className="text-[#000c] max-sm:text-sm leading-6">With Us</p>
              <FaArrowRight className="text-[#525de0] sm:text-3xl absolute left-2 bottom-2.5" />
              </div>
            </div>
    </div>
  )
}

export default Maincard