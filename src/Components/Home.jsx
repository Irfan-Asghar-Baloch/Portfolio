// src/components/Home.jsx
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import profileImg from "../assets/profile.png";

// const skills = [
//   "ASP.NET Core",
//   "REST APIs",
//   "SQL Server",
//   "JWT Authentication",
//   "Clean Architecture",
//   "Azure",
// ];
const skills = [
  "REST API Development",
  "Authentication & Security",
  "Database Optimization",
  "Python & FastAPI",
  "React Applications",
  "Clean Architecture",
  "Performance Optimization",
  "LLMs & AI Agents",
];

export default function Home() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-between bg-[#0B1120] text-white scroll-mt-20"
      style={{ paddingTop: "80px" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:flex lg:items-center lg:justify-between gap-12">
        {/* Text */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
            Building Enterprise Software
            <br />
            <span className="text-[#00E5D0]">
              and AI-Powered Workflows
            </span>
          </h1>

          <p className="mt-4 text-xl sm:text-2xl font-semibold text-gray-300">
            Full-Stack AI Engineer | .NET, Python & React
          </p>

          <p className="mt-6 text-gray-300 max-w-xl text-lg leading-relaxed">
            I’m Irfan Asghar, a developer with 2+ years of professional .NET experience, now also working in AI engineering at MaxRemind. I build enterprise APIs, full-stack applications and AI agents that connect software to real business workflows.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-3 mt-6 justify-center lg:justify-start">
            {skills.map((tech) => (
              <span
                key={tech}
                className="px-4 py-1 rounded-full text-sm bg-white/5 border border-white/10 hover:bg-[#00E5D0]/10 transition"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-[#00E5D0] text-black font-semibold px-8 h-12 rounded-lg hover:brightness-105 transition"
            >
              View Projects
            </button>

            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download
              className="flex items-center justify-center gap-2 px-8 h-12 rounded-lg border border-white/20 hover:bg-white/10 transition"
            >
              Previous Resume <SaveAltIcon fontSize="small" />
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 flex flex-col sm:flex-row gap-6 text-center justify-center">
            <div>
              <h3 className="text-2xl font-bold text-[#00E5D0]">2+ Years</h3>
              <p className="text-gray-400 text-sm">
                Professional Backend Experience
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#00E5D0]">AI Agents</h3>
              <p className="text-gray-400 text-sm">
                Voice & Workflow Automation
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#00E5D0]">30%</h3>
              <p className="text-gray-400 text-sm">
                SQL Performance Improvement
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#00E5D0]">3.96/4.0</h3>
              <p className="text-gray-400 text-sm">
                BSCS · Gold Medalist
              </p>
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex-1 flex justify-center mt-12 lg:mt-0">
          <div className="bg-[#111827] p-4 rounded-xl border border-white/10 hover:shadow-lg transition">
            <img
              src={profileImg}
              alt="Irfan Asghar"
              className="w-72 sm:w-80 lg:w-[340px] rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}