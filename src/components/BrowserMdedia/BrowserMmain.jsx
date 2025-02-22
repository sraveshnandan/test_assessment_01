import React from 'react'
import BrowserCard from './BrowserCard'

const BrowserMmain = () => {
  return (
    <div className='flex flex-col items-center p-5 h-full'>
        <h1 className='text-2xl font-bold'>Browse Media by Genre</h1>
        <BrowserCard/>
    </div>
  )
}

export default BrowserMmain