import React from 'react';
import NavigationBar from './Homepage/NavigationBar';
const Certificates = () => {
  return (
    <div className="min-h-screen bg-[#1C1C22] text-white flex flex-col justify-between items-center ">
      <NavigationBar></NavigationBar>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-400 text-center mb-8 sm:mb-12  ">
        What do? Certificates
      </h1>
      <div className="w-full max-w-[1500px] px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 mb-10 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Certificate 1 */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col justify-between items-center">
          <img
            src="/1.png"
            alt="Thailand Open ROS and Smart Robot Competition 2025"
            className="w-full h-auto object-cover rounded-md mb-2"
          />
          <p className="text-center text-sm sm:text-base">3rd - Thailand Open ROS and Smart Robot Competition 2025</p>
        </div>

        {/* Certificate 2 */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col justify-between items-center">
          <img
            src="/2.png"
            alt="Thailand New Inventors Award 2025"
            className="w-full h-auto object-cover rounded-md mb-2"
          />
          <p className="text-center text-sm sm:text-base">Gold Medal Thailand New Gen inventors Award 2025</p>
        </div>

        {/* Certificate 3 */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col justify-between items-center">
          <img
            src="/3.png"
            alt="NSTD Micro-Mouse Contest 2025"
            className="w-full h-auto object-cover rounded-md mb-2"
          />
          <p className="text-center text-sm sm:text-base">2nd NSTDA Micro-Mouse Contest 2025</p>
        </div>

        {/* Certificate 4 */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col justify-between items-center">
          <img
            src="/4.png"
            alt="Thailand Open 2024"
            className="w-full h-auto object-cover rounded-md mb-2"
          />
          <p className="text-center text-sm sm:text-base">3rd ARDUINO ECUCATION DAY THAILAND 2024 (Beginner RMRC)</p>
        </div>

        {/* Certificate 5 */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col justify-between items-center">
          <img
            src="/5.png"
            alt="Arduino Education Day RMRC 2024"
            className="w-full h-auto object-cover rounded-md mb-2"
          />
          <p className="text-center text-sm sm:text-base">3rd งานประชุมวิชาการระดับชาติสวนดุสิต 2024 
ครั้งที่ 6  “นวัตกรรมเพื่อการศึกษา”</p>
        </div>

        {/* Certificate 6 */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col justify-between items-center">
          <img
            src="/6.png"
            alt="Env Mission 4"
            className="w-full h-auto object-cover rounded-md mb-2"
          />
          <p className="text-center text-sm sm:text-base">เข้าร่วม โครงการ Envi Mission ภารกิจรักสิ่งเเวดล้อม รุ่นที่ 4</p>
        </div>

        {/* Certificate 7 */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col justify-between items-center">
          <img
            src="/7.png"
            alt="46 ICT 2566"
            className="w-full h-auto object-cover rounded-md mb-2"
          />
          <p className="text-center text-sm sm:text-base">2nd การเเข่งขันมหกรรม 46 ICT หุ่นยนต์เเบบผสม 2566</p>
        </div>

        {/* Certificate 8 */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col justify-between items-center">
          <img
            src="/8.png"
            alt="Tracking Robot Contest 2567"
            className="w-full h-auto object-cover rounded-md mb-2"
          />
          <p className="text-center text-sm sm:text-base">เข้าร่วม การเเข่งขันรถวิ่งตามเส้นเจ้าเเห่งความเร็ว Line Tracking Robot Contest ประจำปี 2567</p>
        </div>

        {/* Certificate 9 */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col justify-between items-center">
          <img
            src="/9.png"
            alt="UBON Robot Games 2024"
            className="w-full h-auto object-cover rounded-md mb-2"
          />
          <p className="text-center text-sm sm:text-base">เข้าร่วม UBON Robot Games 2024</p>
        </div>

        {/* Certificate 10 */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col justify-between items-center">
          <img
            src="/10.png"
            alt="46 ICT 2567"
            className="w-full h-auto object-cover rounded-md mb-2"
          />
          <p className="text-center text-sm sm:text-base">Gold การเเข่งขันมหกรรม 46 ICT 
หุ่นยนต์เเบบผสม 2567</p>
        </div>

        {/* Certificate 11 */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col justify-between items-center">
          <img
            src="/11.png"
            alt="72"
            className="w-full h-auto object-cover rounded-md mb-2"
          />
          <p className="text-center text-sm sm:text-base">Gold งานศิลปหัตถกรรมนักเรียน ครั้งที่ 72
การเเข่งขันหุ่นยนต์ระดับกลาง</p>
        </div>

        {/* Certificate 12 */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col justify-between items-center">
          <img
            src="/12.png"
            alt="71"
            className="w-full h-auto object-cover rounded-md mb-2"
          />
          <p className="text-center text-sm sm:text-base">Bronze งานศิลปหัตถกรรมนักเรียน ครั้งที่ 71 
การเเข่งขันหุ่นยนต์ระดับกลาง</p>
        </div>
      </div>
    </div>
  );
};

export default Certificates;