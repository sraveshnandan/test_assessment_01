import React from 'react'
import { IoMailOpenOutline } from "react-icons/io5";
import { FaArrowRight } from 'react-icons/fa'
import { FaBell } from "react-icons/fa";



const News = () => {
  return (
    <div className=' flex-col bg-[url("/src/assets/newsletter-bg.jpg")] bg-cover bg-center bg-no-repeat py-20  flex justify-center items-center'>
        <div className="text text-center">
            <p className='font-bold text-[#525fe0] tracking-wider'>SUBSCRIBE NEWSLETTER</p>
            <h2 className='font-semibold text-3xl'>Get Every Latest News</h2>
        </div>
          <div className='relative flex flex-col items-center justify-center mt-15'>
          <input type="text" placeholder='Enter your mail address' className=' border-white bg-white pl-10 md:pr-55 py-6 mb-5 sm:w-140 rounded-md' />
          <IoMailOpenOutline className='text-gray-500 text-3xl absolute  top-5 left-2' />
          <button className='md:absolute top-1/8 right-2 flex items-center justify-center gap-1 bg-[#525de0] text-white text-xl rounded-md font-bold px-8 py-3 hover:bg-[#242641] transition-all delay-150'><FaBell/>Subscribe<FaArrowRight/> </button>          
          </div>
    </div>
  )
}

export default News