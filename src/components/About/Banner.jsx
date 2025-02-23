import React from 'react'

const Banner = () => {
  return (
    <div className='flex-col p-5 text-center justify-center item-center relative'>
        <img src="/src/assets/about-banner.jpg" alt="main" className=' rounded-md z-50' />
        <img src="/src/assets/about-abs-1.jpg" alt="1st" className=' sm:absolute max-sm:hidden top-45 right-5 lg:-right-1/7 rounded-md' />
        <img src="/src/assets/about-abs-2.jpg" alt="1st" className=' sm:absolute max-lg:hidden -left-20  top-10 -z-50 rounded-md' />
    </div>
  )
}

export default Banner