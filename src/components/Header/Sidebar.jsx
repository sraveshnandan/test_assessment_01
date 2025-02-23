import React, { useState } from 'react';
import Navmenu from './Navbar/Navmenu';

function Sidebar() {
   const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="lg:hidden">
        
        <Navmenu className="menu lg:hidden bg-white px-3 py-1 leading-12 rounded-md shadow-sm shadow-gray-500 cursor-pointer"    
        onClick={toggleMenu} />
        
  
        {/* Sidebar Menu */}
        <h1 className={`fixed top-0 left-0 z-50 w-64 h-full p-5 bg-white text-gray-500 transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out`}>
            <Logo/>
            
          </h1>        
  
        {/* Overlay when sidebar is open */}
        {isOpen && (
          <div
            onClick={toggleMenu}
            className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
          ></div>
        )}
      </div>
    );
  
}

export default Sidebar;
