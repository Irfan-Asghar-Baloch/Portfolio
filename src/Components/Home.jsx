import React from "react";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import SouthIcon from "@mui/icons-material/South";
import profileImg from "../assets/profile.png";

const skills = [
  "ASP.NET Core",
  "Web APIs",
  "SQL Server",
  "Azure",
  "Clean Architecture",
  "React",
];

function Home() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="bg-[#0B1120] text-white min-h-screen relative flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:flex lg:items-center lg:justify-between gap-12">
        {/* LEFT CONTENT */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Building Scalable <br />
            <span className="text-[#00E5D0]">.NET Applications</span>
          </h1>

          <p className="mt-4 text-xl sm:text-2xl font-semibold text-gray-300">
            Full Stack .NET Developer
          </p>

          <p className="mt-6 text-gray-300 max-w-xl text-lg leading-relaxed">
            I design and develop secure, high-performance web applications using{" "}
            <strong>ASP.NET Core</strong>, <strong>Web APIs</strong>,{" "}
            <strong>SQL Server</strong>, and <strong>Clean Architecture</strong>.
            I build scalable solutions with clean, maintainable code.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start mt-6">
            {skills.map((tech) => (
              <span
                key={tech}
                className="px-4 py-1 rounded-full text-sm bg-white/5 border border-white/10 hover:bg-white/10 transition transform hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-[#00E5D0] hover:bg-cyan-400 text-black font-semibold px-8 h-12 rounded-lg shadow-lg transition transform hover:-translate-y-1"
            >
              View Projects
            </button>

            <a
              href="/resume.pdf"
              download
              className="flex items-center justify-center gap-2 px-8 h-12 rounded-lg border border-white/20 hover:bg-white/10 transition transform hover:-translate-y-1"
            >
              Download Resume <SaveAltIcon fontSize="small" />
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center mt-12 lg:mt-0 animate-fade-in delay-150">
          <div className="bg-[#111827] p-4 rounded-xl shadow-2xl border border-white/10 transition transform hover:scale-105">
            <img
              src={profileImg}
              alt="Irfan Asghar"
              className="w-72 sm:w-80 lg:w-[340px] rounded-lg object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Scroll Button */}
      <div className="flex justify-center mt-12 animate-bounce">
        <button
          onClick={() => scrollToSection("about")}
          className="w-14 h-14 rounded-full border border-white/20 hover:bg-white/10 flex items-center justify-center transition"
          aria-label="Scroll to About section"
        >
          <SouthIcon />
        </button>
      </div>
    </section>
  );
}

export default Home;
