import React, { useState, useEffect } from 'react';
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import Logo from "./Logo";
import Login from "./Login";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  const [scroll, setscroll] = useState(false);

    useEffect(()=>{
      const handleScroll = ()=>{
        if(window.scrollY>10){
          setscroll(true);
  
        }else{
          setscroll(false);
        }
      };
      window.addEventListener('scroll',handleScroll);
  
      return ()=>{
        window.removeEventListener('scroll',handleScroll);
      };
    },[])

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 1024);
    if (window.innerWidth >= 1024) {
      setIsOpen(false); // Close the mobile menu if resizing to desktop
    }
  };

  
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`fixed top-0 z-50 flex justify-between items-center w-full h-fit p-4 transition-all duration-300 ${scroll ? 'bg-white shadow-lg' : 'bg-transparent'}`}>      
        {/* Overlay for Mobile */}
  {isMobile && isOpen && (
    <div
      className="fixed inset-0 bg-black opacity-50"
      onClick={toggleNavbar}
    />
  )}
      <Logo/>
      {/* Navbar */}
      <div
        className={`fixed top-0 left-0 h-full w-[250px] bg-white text-black transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:relative lg:h-auto lg:bg-transparent lg:w-auto lg:flex lg:items-center lg:justify-between`}
      >
        <div className="p-4 lg:p-0">
          <div className={`flex items-center justify-between text-xl sm:text-2xl leading-9 text-[#525de0] font-extrabold font-Urbanist ${isOpen?'':'hidden'}`}>
            <h1>Media Dost</h1>
            <IoClose onClick={toggleNavbar}/>
          </div>
          <ul className="lg:flex md:space-x-4 font-Urbanist text-lg">
            <li className="hover:text-[#525de0] cursor-pointer py-2 lg:py-0"><a href="#about">Home</a></li>
            <li className="hover:text-[#525de0] cursor-pointer py-2 lg:py-0"><a href="#services">My Order</a></li>
            <li className="hover:text-[#525de0] cursor-pointer py-2 lg:py-0"><a href="#contact">Blog</a></li>
            <li className="hover:text-[#525de0] cursor-pointer py-2 lg:py-0"><a href="#team">Team</a></li>
            <li className="hover:text-[#525de0] cursor-pointer py-2 lg:py-0"><a href="#about">About</a></li>
            <li className="hover:text-[#525de0] cursor-pointer py-2 lg:py-0"><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>      

      <div className='flex justify-between gap-2 items-center'>
      <Login/>
      {isMobile && (
        <div onClick={toggleNavbar}
                className="menu lg:hidden bg-white px-1 sm:px-3 py-1 leading-12 w-fit rounded-md shadow-sm shadow-gray-500 cursor-pointer">
                <IoIosMenu className="text-3xl sm:text-5xl text-[#525de0]" />
        </div>
      )}
      </div>
    </div>

    
  );
};

export default Navbar;