import React from "react";
import projectarrow from "../assets/projectarrow.png";
import UIUX from "../assets/recentWork1.png";
import r2 from "../assets/r2.png";
import r3 from "../assets/r2.1.png";
import mobile1 from "../assets/m1.png";
import mbobilemiddle from "../assets/middlem.png";
import lastmobile from "../assets/endm.png";

function Project() {
  return (
    <div className="bg-[#222831] py-10 px-4 md:px-10 border-b-2 border-[#EEEEEE1A]">
      <div className="flex flex-col items-center">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold mt-4 text-center">
          My recent <span className="text-[#00adb5]">works</span>
        </h1>

        {/* Filter Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center mt-6">
          <button className="bg-[#00adb5] rounded-3xl w-24 h-10 text-white font-bold drop-shadow-lg">
            All
          </button>
          <button className="bg-[#393E46BF] rounded-3xl w-24 h-10 text-white font-bold drop-shadow-md">
            UI
          </button>
          <button className="bg-[#393E46BF] rounded-3xl w-24 h-10 text-white font-bold drop-shadow-md">
            UX
          </button>
          <button className="bg-[#393E46BF] rounded-3xl w-40 h-10 text-white font-bold drop-shadow-md">
            Web Design
          </button>
        </div>

        {/* Projects Grid */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-10 w-full">
          {/* Card 1 */}
          <div className="bg-gray-500/20 h-60 w-72 sm:w-80 flex justify-center items-center p-4 rounded-lg shadow-lg shadow-violet-500/50 ">
            <img src={UIUX} alt="UIUX Project" className="max-h-full " />
          </div>

          {/* Card 2 */}
          <div className="bg-gray-500/20 h-60 w-72 sm:w-80 flex justify-center items-center relative p-4 rounded-lg shadow-lg shadow-amber-500/50 ">
            <img src={r3} alt="Overlay Project" className="w-52 z-10" />
            <img
              src={r2}
              alt="Overlay"
              className="w-52 absolute top-4 left-8 z-0 opacity-80"
            />
          </div>

          {/* Card 3 */}
          <div className="bg-gray-500/20 h-60 w-72 sm:w-80 flex justify-center items-center relative p-4 rounded-lg shadow-lg shadow-cyan-500/50 ">
            <img src={mobile1} alt="Mobile 1" className="w-20 z-10" />
            <img
              src={mbobilemiddle}
              alt="Middle"
              className="w-20 z-20 scale-110 relative -top-1"
            />
            <img src={lastmobile} alt="End" className="w-20 z-10" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
