import React from "react";
import NavigationBar from "./NavigationBar";
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col justify-between items-center w-full h-full">
        <NavigationBar />
        <div className="flex flex-1/2  max-w-[1500px] w-full p-4  lg:justify-between items-center justify-center">
          <div className=" flex flex-col lg:mt-20 mt-10 lg:items-start  items-center">
            <p className="text-white lg:text-2xl text-lg">
              Junior Front-End Developer
            </p>

            <h1 className="text-white xl:text-[7rem] text-4xl mt-4 ">
              Hello I'm
            </h1>
            <div className="flex lg:flex-row flex-col lg:gap-6">
              <h1 className="text-second xl:text-5xl text-4xl lg:mt-6 mt-3 text-center">
                Thanapat
              </h1>
              <h1 className="text-second xl:text-5xl md:text-5xl text-4xl lg:mt-6 mt-3 text-center">
                Burapawijitnon
              </h1>
            </div>
            {/* <img
              className="block lg:hidden"
              src="./src/assets/hacker.png"
              alt=""
            /> */}
            <h1 className="text-second lg:text-7xl text-4xl lg:mt-6 mt-3 "></h1>
            <p className="text-white lg:text-xl text-md lg:mt-6  mt-6">
              I am ready to learn new things.
            </p>
            <p className="text-white lg:text-xl text-md  lg:mt-4  mt-3">
              I don't stop when I'm tired,
            </p>
            <p className="text-white lg:text-xl text-md  lg:mt-4 mt-3">
              I stop when I'm done.
            </p>
            <div className="flex flex-row  lg:gap-9 gap-3 lg:mt-9 mt-6 items-center">
              <div className="text-second lg:text-2xl text-sm  border-1 lg:px-12 lg:py-4 px-6 py-3 lg:rounded-[28px] rounded-4xl">
                Let's Talk
              </div>
              <div className="border-second border-2 p-2 rounded-full">
                <a
                  className="text-second lg:text-2xl text-xl   "
                  href="https://github.com/Pupukunn"
                >
                  <FaGithub />
                </a>
              </div>
              <div className="border-second border-2 p-2 rounded-full">
                <a
                  className="text-second lg:text-2xl text-xl   "
                  href="https://github.com/Pupukunn"
                >
                  <FaFacebook />
                </a>
              </div>
              <div className="border-second border-2 p-2 rounded-full">
                <a
                  className="text-second lg:text-2xl text-xl   "
                  href="https://github.com/Pupukunn"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
          <div className="">
            <img
              className="lg:block hidden"
              src="/hacker.png"
              alt=""
            />
          </div>
        </div>

        <div className="flex lg:flex-row flex-col w-[80%] max-w-[1500px] mx-auto text-white lg:gap-15 gap-5 lg:items-start items-center lg:y-16 py-9 ">
          <div className="flex w-full justify-between items-center  border-1 rounded-[28px] lg:py-[27px] py-4 gap-4 lg:gap-6  hover:backdrop-blur-xl bg-opacity-30 transition-all duration-300 cursor-pointer">
            <h1 className="lg:text-3xl text-xl pl-6">2nd</h1>
            <p className="lg:text-lg text-xs  pr-6">
              NSTDA Micro-mouse contest 2025
            </p>
          </div>

          <div className="flex w-full justify-between items-center  border-1 rounded-[28px] py-4 gap-4 lg:gap-5 ">
            <h1 className="lg:text-3xl text-xl pl-6">3rd</h1>
            <p className="lg:text-lg text-xs  pr-6">
              Thailand Open ROS and Smart <br></br> Robot Competition 2025
              (RMRC)
            </p>
          </div>

          <div className="flex w-full justify-between items-center  border-1 rounded-[28px]  py-4  lg:gap-5 gap-2">
            <h1 className="lg:text-3xl text-xl pl-6">Gold Medal</h1>
            <p className="lg:text-lg text-xs pr-6">
              Thailand New Gen <br></br>inventors Award 2025
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
