import React from 'react'
import AboutContent from './AboutContent'
import Banner from './Banner'

const About = () => {
  return (
    <div className="about max-lg:flex-col items-center flex justify-around gap-10 md:p-10">
      <Banner />
      <AboutContent />
    </div>
  )
}

export default About