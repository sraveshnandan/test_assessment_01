import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="p-5 bg-[#231f41] ">
      <div className=" sm:px-15 pt-15 text-white gap-12 grid sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <dev className="mediaDost">
          <h1 className="text-3xl font-semibold pb-10">Media Dost</h1>
          <p className="pb-8">
            Advertising should be effortless and impactful. At MediaDost, we
            ensure every ad finds its perfect place, engaging audiences with
            precision and purpose. Experience the future of seamless advertising
            with us.
          </p>
          <ul className="flex max-sm:flex-wrap items-center gap-3">
            <li className="bg-[#383257] p-2 rounded-md hover:bg-[#525de0] transition-all delay-150 text-center">
              <a href="https://www.instagram.com/mediadost_/">
                <FaInstagram className="text-3xl" />
              </a>
            </li>
            <li className="bg-[#383257] p-2 rounded-md hover:bg-[#525de0] transition-all delay-150 text-center">
              <a href="https://www.linkedin.com/company/mediadost/">
                <FaLinkedin className="text-3xl" />
              </a>
            </li>
            <li className="bg-[#383257] p-2 rounded-md hover:bg-[#525de0] transition-all delay-150 text-center">
              <a href="#">
                <FaTwitter className="text-3xl" />
              </a>
            </li>
            <li className="bg-[#383257] p-2 rounded-md hover:bg-[#525de0] transition-all delay-150 text-center">
              <a href="#">
                <FaFacebook className="text-3xl" />
              </a>
            </li>
          </ul>
        </dev>
        <div className="explore">
          <h1 className="text-3xl font-semibold">Explore</h1>
          <ul className="py-8">
            <li className="hover:text-[#252de0] cursor-pointer">
              <FaChevronRight className="inline" />&nbsp;
              <a href="#" className="text-base leading-10">
                About Us
              </a>
            </li>
            <li className="hover:text-[#252de0] cursor-pointer">
              <FaChevronRight className="inline" />&nbsp;
              <a href="#" className="text-base leading-10">
                Upcomming Events
              </a>
            </li>
            <li className="hover:text-[#252de0] cursor-pointer">
              <FaChevronRight className="inline" />&nbsp;
              <a href="#" className="text-base leading-10">
                Blog & News
              </a>
            </li>
            <li className="hover:text-[#252de0] cursor-pointer">
              <FaChevronRight className="inline" />&nbsp;
              <a href="#" className="text-base leading-10">
                FAQ Question
              </a>
            </li>
            <li className="hover:text-[#252de0] cursor-pointer">
              <FaChevronRight className="inline" />&nbsp;
              <a href="#" className="text-base leading-10">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className="usefullinks">
          <h1 className="text-3xl font-semibold">Useful Links</h1>
          <ul className="py-8">
            <li className="hover:text-[#252de0] cursor-pointer">
              <FaChevronRight className="inline" />&nbsp;
              <a href="#" className="text-base leading-10">
                Contact Us
              </a>
            </li>
            <li className="hover:text-[#252de0] cursor-pointer">
              <FaChevronRight className="inline" />&nbsp;
              <a href="#" className="text-base leading-10">
                My Orders
              </a>
            </li>
            <li className="hover:text-[#252de0] cursor-pointer">
              <FaChevronRight className="inline" />&nbsp;
              <a href="#" className="text-base leading-10">
                My Profile
              </a>
            </li>
            <li className="hover:text-[#252de0] cursor-pointer">
              <FaChevronRight className="inline" />&nbsp;
              <a href="#" className="text-base leading-10">
                Team
              </a>
            </li>
            <li className="hover:text-[#252de0] cursor-pointer">
              <FaChevronRight className="inline" />&nbsp;
              <a href="#" className="text-base leading-10">
                Term & Conditions
              </a>
            </li>
          </ul>
        </div>
        <div className="contact">
          <h1 className="text-3xl font-semibold">Contact Info</h1>
          <ul className="py-8">
            <li className="hover:text-[#252de0] cursor-pointer">
              <IoLocationOutline className="inline" /> &nbsp;
              <a href="#" className="text-base leading-10">
                GEC Jamui, Amrath-811313, Bihar
              </a>
            </li>
            <li className="hover:text-[#252de0] cursor-pointer">
              <IoCall className="inline" /> &nbsp;
              <a href="#" className="text-base leading-10">
                + 91 99422-22304
              </a>
            </li>
            <li className="hover:text-[#252de0] cursor-pointer">
              <IoMailOutline className="inline" /> &nbsp;
              <a href="#" className="text-base leading-10">
                contact@mediadost.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom text-md text-white text-center p-10">
        <p className="text-center inline">
          &copy; Copyright 2025 Media Dost. All Rights Reserved by &nbsp;
        </p>
        <span className="font-semibold hover:text-[#252de0]">MediaDost</span>
      </div>
    </div>
  );
};

export default Footer;
