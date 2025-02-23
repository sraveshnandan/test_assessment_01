import React from "react";
import { FaArrowRight } from "react-icons/fa";


const AboutContent = () => {
  return (
    <div className="w-1/2 max-lg:w-full p-5 sm:pl-20">
      <h3 className=" text-xl font-semibold text-[#525de0] pb-6">Why Choose Us?</h3>
      <h1 className="text-2xl font-semibold">
        We Offer The Best Advertisement Services
      </h1>
      <div className="space-y-10 mt-8 ">
        <span className="flex items-center space-x-4">
          <img
            src="/src/assets/about-icon-1.png"
            alt="ist"
            className="bg-[#ffa31a1a] p-3 w-15 rounded-full"
          />
          <span>
            <h1 className="font-semibold text-xl">
              Strategic Advertising Solutions
            </h1>
            <p className="text-[#6f6b80]">
              Our industry experts plan and execute impactful ad campaigns
              tailored to your business needs.
            </p>
          </span>
        </span>
        <span className="flex items-center space-x-4">
          <img
            src="/src/assets/about-icon-2.png"
            alt="ist"
            className="bg-[#525de01a] p-3 w-15 rounded-full"
          />
          <span>
            <h1 className="font-semibold text-xl">
              Strategic Advertising Solutions
            </h1>
            <p className="text-[#6f6b80]">
              Our industry experts plan and execute impactful ad campaigns
              tailored to your business needs.
            </p>
          </span>
        </span>
        <span className="flex items-center space-x-4">
          <img
            src="/src/assets/about-icon-3.png"
            alt="ist"
            className="bg-[#fb7c561a] p-3 w-15 rounded-full"
          />
          <span>
            <h1 className="font-semibold text-xl">
              Strategic Advertising Solutions
            </h1>
            <p className="text-[#6f6b80]">
              Our industry experts plan and execute impactful ad campaigns
              tailored to your business needs.
            </p>
          </span>
        </span>
      </div>
      <span className="flex text-2xl justify-center gap-2 sm:w-65 items-center bg-[#525de0] text-white px-6 py-5 rounded-md mt-8 hover:bg-[#231f41] transition-all delay-150">
        <span className="">Know About Us</span>
        <FaArrowRight className="text-white" />
      </span>
    </div>
  );
};

export default AboutContent;
