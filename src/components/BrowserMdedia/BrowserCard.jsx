import React from 'react'
import { FaBullhorn } from "react-icons/fa";
import { FaStore } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaFilm } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa";
import { FaBroadcastTower } from "react-icons/fa";
import { FaRunning } from "react-icons/fa";
import { FaTv } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";


const BrowserCard = () => {
  return (
    <div className='grid max-md:grid-cols-4 md:grid-cols-6 justify-around gap-1 sm:gap-2 md:px-15 pt-5  items-center w-full h-full'>

        <div className="flex flex-col justify-center items-center browser-card h-18 sm:h-30 rounded-md bg-[#edebe9] hover:bg-[#E7E9F1] hover:scale-105 transition-all duration-300">
        <FaBullhorn className="text-[#525de0] max-sm:text-2xl sm:text-5xl"/>
        <h1 className='sm:text-md max-sm:text-[9px]'>Outdoor</h1>
        </div>
        <div className="flex flex-col justify-center items-center browser-card  h-18 sm:h-30 rounded-md bg-[#edebe9] hover:bg-[#E7E9F1] hover:scale-105 transition-all duration-300">
        <FaStore className="text-[#525de0] max-sm:text-2xl sm:text-5xl"/>
        <h1 className='sm:text-md max-sm:text-[9px]'>Residential</h1>
        </div>
        <div className="flex flex-col justify-center items-center browser-card h-18 sm:h-30 rounded-md bg-[#edebe9] hover:bg-[#E7E9F1] hover:scale-105 transition-all duration-300">
        <FaBuilding className="text-[#525de0] max-sm:text-2xl sm:text-5xl"/>
        <h1 className='sm:text-md max-sm:text-[9px]'>Retail & Mall</h1>
        </div>
        <div className="flex flex-col justify-center items-center browser-card h-18 sm:h-30 rounded-md bg-[#edebe9] hover:bg-[#E7E9F1] hover:scale-105 transition-all duration-300">
        <FaCar className="text-[#525de0] max-sm:text-2xl sm:text-5xl"/>
        <h1 className='sm:text-md max-sm:text-[9px]'>Transit</h1>
        </div>
        <div className="flex flex-col justify-center items-center browser-card h-18 sm:h-30 rounded-md bg-[#edebe9] hover:bg-[#E7E9F1] hover:scale-105 transition-all duration-300">
        <FaUserFriends className="text-[#525de0] max-sm:text-2xl sm:text-5xl"/>
        <h1 className='sm:text-md max-sm:text-[9px]'>Influencer</h1>
        </div>
        <div className="flex flex-col justify-center items-center browser-card h-18 sm:h-30 rounded-md bg-[#edebe9] hover:bg-[#E7E9F1] hover:scale-105 transition-all duration-300">
        <FaGraduationCap className="text-[#525de0] max-sm:text-2xl sm:text-5xl"/>
        <h1 className='sm:text-md max-sm:text-[9px]'>Institutes</h1>
        </div>
        <div className="flex flex-col justify-center items-center browser-card h-18 sm:h-30 rounded-md bg-[#edebe9] hover:bg-[#E7E9F1] hover:scale-105 transition-all duration-300">
        <FaFilm className="text-[#525de0] max-sm:text-2xl sm:text-5xl"/>
        <h1 className='sm:text-md max-sm:text-[9px]'>Cinema</h1>
        </div>
        <div className="flex flex-col justify-center items-center browser-card  h-18 sm:h-30 rounded-md bg-[#edebe9] hover:bg-[#E7E9F1] hover:scale-105 transition-all duration-300">
        <FaNewspaper className="text-[#525de0] max-sm:text-2xl sm:text-5xl"/>
        <h1 className='sm:text-md max-sm:text-[9px]'>Newspaper</h1>
        </div>
        <div className="flex flex-col justify-center items-center browser-card h-18 sm:h-30 rounded-md bg-[#edebe9] hover:bg-[#E7E9F1] hover:scale-105 transition-all duration-300">
        <FaBroadcastTower className="text-[#525de0] max-sm:text-2xl sm:text-5xl"/>
        <h1 className='sm:text-md max-sm:text-[9px]'>Radio</h1>
        </div>
        <div className="flex flex-col justify-center items-center browser-card h-18 sm:h-30 rounded-md bg-[#edebe9] hover:bg-[#E7E9F1] hover:scale-105 transition-all duration-300">
        <FaRunning className="text-[#525de0] max-sm:text-2xl sm:text-5xl"/>
        <h1 className='sm:text-md max-sm:text-[9px]'>Sports</h1>
        </div>
        <div className="flex flex-col justify-center items-center browser-card h-18 sm:h-30 rounded-md bg-[#edebe9] hover:bg-[#E7E9F1] hover:scale-105 transition-all duration-300">
        <FaTv className="text-[#525de0] max-sm:text-2xl sm:text-5xl"/>
        <h1 className='sm:text-md max-sm:text-[9px]'>Telivision</h1>
        </div>
        <div className="flex flex-col justify-center items-center browser-card h-18 sm:h-30 rounded-md bg-[#edebe9] hover:bg-[#E7E9F1] hover:scale-105 transition-all duration-300">
        <FaInfoCircle className="text-[#525de0] max-sm:text-2xl sm:text-5xl"/>
        <h1 className='sm:text-md max-sm:text-[9px]'>Other</h1>
        </div>
    </div>
  )
}

export default BrowserCard