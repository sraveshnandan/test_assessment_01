import React, { useState,useEffect } from "react";
import Login from "./Login";
import NavBar from "./NavBar";
import Logo from "./Logo";

const NavbarMain = ({}) => {
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

  
  return (
    <>
      <div className={`fixed top-0 z-50 flex justify-between items-center w-full h-fit p-4 transition-all duration-300 ${scroll ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <Logo />
        <NavBar prob="max-lg:hidden"/>
        <Login />
      </div>
    </>
  );
};

export default NavbarMain;
