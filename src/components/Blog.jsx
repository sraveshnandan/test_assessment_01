import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Blog = () => {
  return (
    <div className=" p-5 sm:p-20 ">
        <div >
          <div className='flex flex-col items-center justify-center'>
            <p className='  text-10 tracking-widest font-bold text-[#525de0]'>LATEST BLOGS</p>
            <h2 className='text-3xl font-semibold'>Read Our Features Blogs</h2>
          </div>            
            
        </div>
        <div className=" flex justify-between items-center gap-20 mt-10">
                <span className='text'>No recent blog available</span>
                <span className='self-baseline text-2xl text-[#525de0] cursor-pointer hover:text-amber-500 font-semibold'>view all blogs &nbsp;
                  <FaArrowRight className='inline-block' />
                </span>
            </div>
    </div>
  )
}

export default Blog