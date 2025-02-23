import React from 'react'

const Client = () => {
  return (
    <div className='w-full flex flex-col justify-around items-start px-5 md:px-15 pt-8 pb-10'>
        <h1 className='text-3xl font-semibold pb-8'>Our Client</h1>
        <div className='bg-[url("/src/assets/road-img.png")]  md:bg-[url("/src/assets/road-img-2.png")] flex overflow-hidden gap-8 items-center p-10 bg-cover bg-center w-full h-30 rounded-md'>
          <h1 className='text-[#6f6b80] text-nowrap'>no clients found</h1>
          <h1 className='text-[#6f6b80] text-nowrap '>no clients found</h1>
          <h1 className='text-[#6f6b80] text-nowrap'>no clients found</h1>
        </div>        
    </div>
  )
}

export default Client