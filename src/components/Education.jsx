import React from 'react';
import NavigationBar from './Homepage/NavigationBar';
const Education = () => {
  return (
    <div className="min-h-screen bg-[#1C1C22] text-white flex flex-col items-center  px-4 sm:px-6 lg:px-8">
      <NavigationBar />
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-green-400 text-center mb-12">
        My Educational Journey
      </h1>
      <div className="relative w-full max-w-4xl  mb-8 sm:mb-12 ">
        {/* Vertical Line/Path */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-400 to-gray-600 dotted-line"></div>

        {/* Education Milestones */}
        <div className="flex flex-col items-center space-y-16">
          {/* Milestone 1 */}
          <div className="flex flex-col items-center w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg z-10">
            <div className="bg-green-400 w-12 h-12 flex items-center justify-center rounded-full text-black font-semibold mb-4">
              2013
            </div>
            <h2 className="text-xl sm:text-2xl font-bold mb-2">โรงเรียนอนุบาล</h2>
            <p className="text-center text-sm sm:text-base">โรงเรียนใจรัก</p>
            <p className="text-center text-sm text-gray-400 mt-2"></p>
          </div>

          {/* Milestone 2 */}
          <div className="flex flex-col items-center w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg z-10">
            <div className="bg-green-400 w-12 h-12 flex items-center justify-center rounded-full text-black font-semibold mb-4">
              2020
            </div>
            <h2 className="text-xl sm:text-2xl font-bold mb-2">โรงเรียนปฐมศึกษา</h2>
            <p className="text-center text-sm sm:text-base">โรงเรียนพิพัฒนา</p>
            <p className="text-center text-sm text-gray-400 mt-2"></p>
          </div>

          {/* Milestone 3 */}
          <div className="flex flex-col items-center w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg z-10">
            <div className="bg-green-400 w-12 h-12 flex items-center justify-center rounded-full text-black font-semibold mb-4">
              2024
            </div>
             <h2 className="text-xl sm:text-2xl font-bold mb-2">ปัจจุบัน</h2>
            <h2 className="text-xl sm:text-2xl font-bold mb-2">โรงเรียนมัธยมศึกษา</h2>
            <p className="text-center text-sm sm:text-base">โรงเรียนวชิรธรรมสาธิต</p>
            <p className="text-center text-sm text-gray-400 mt-2">Computer Science</p>
          </div>

          {/* Next Step */}
          
        </div>
      </div>
    </div>
  );
};

export default Education;