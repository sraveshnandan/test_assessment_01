import React from 'react'


const mediaPlan = () => {
  return (
    <div className=' md:flex  gap-5 bg-[url("/src/assets/cta-bg.png")] bg-[#525de0] p-5 sm:p-15 mx-5 sm:mx-25 my-15 rounded-2xl text-white '>
        <div className='flex flex-col justify-center gap-3'>
          <h1 className='text-4xl font-bold'>Need Help?</h1>
         <p className='text-2xl'>Get a free media planner to craft and execute your next promotion. Let us handle the strategy and placement for you!</p>
         < button className=' sm:w-50  cursor-pointer bg-[#231f41] px-5 py-3 rounded-md hover:bg-[#3f3a6d] transition-all delay-150'>📅 Request Plan</button>
        </div>
        <img src="/src/assets/thinking-mediadost.svg" alt=""  className='w-50'/>
    </div>
  )
}

export default mediaPlan