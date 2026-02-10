import React from "react";
import musicIcon from "../assets/music.png";
import bulbIcon from "../assets/bulb.png";
import Aboutimg from "../assets/imgAbout.png";

function Aboutme() {
  return (
    <section
      id="about"
      className="bg-[#222831] text-white px-6 md:px-12 py-20 relative overflow-hidden"
    >
      {/* Top icon */}
      <div className="flex justify-center lg:justify-start mb-10 animate-bounce">
        <img src={musicIcon} alt="Music Icon" className="w-12 sm:w-14" />
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* TEXT */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left animate-fade-in">
          <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl flex items-center mb-6">
            About <span className="text-[#00ADB5] px-3">me</span>
            <img src={bulbIcon} alt="Bulb Icon" className="w-8 sm:w-10 ml-2 animate-pulse" />
          </h1>

          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-4 max-w-xl">
            I am a passionate Full Stack .NET Developer with experience in building
            secure, scalable web applications using <strong>ASP.NET Core</strong>,{" "}
            <strong>Web APIs</strong>, <strong>SQL Server</strong>, and modern front-end
            frameworks like <strong>React</strong>. I enjoy solving complex problems and
            creating efficient, maintainable code.
          </p>

          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-xl">
            When I am not coding, I love music 🎵, brainstorming new ideas 💡, and exploring
            innovative technologies to keep my skills sharp and up-to-date.
          </p>
        </div>

        {/* IMAGE */}
        <div className="flex-1 flex justify-center animate-fade-in delay-150">
          <img
            src={Aboutimg}
            alt="About Illustration"
            className="w-64 sm:w-80 md:w-96 lg:w-[28rem] rounded-[5vw] shadow-2xl shadow-cyan-500/50 transition transform hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}

export default Aboutme;
