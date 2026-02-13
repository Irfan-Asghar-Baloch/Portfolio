import React from "react";

const projects = [
  {
    title: "Enterprise MIS Backend System",
    description:
      "Architected and implemented a scalable multi-department backend system using ASP.NET Core and SQL Server with Clean Architecture principles.",
  },
  {
    title: "Electronic Medical Records (EMR)",
    description:
      "Developed secure healthcare APIs with JWT authentication and role-based authorization for managing sensitive patient records.",
  },
  {
    title: "MaxChat – Real-Time Communication Platform",
    description:
      "Built scalable backend APIs supporting user authentication, messaging workflows, and optimized database handling for fast communication.",
  },
  {
    title: "UAV Disaster Monitoring System (AI-Based)",
    description:
      "Designed backend APIs for processing drone-collected disaster data with intelligent AI integration for real-time emergency response.",
  },
  {
    title: "Bone Fracture Detection (AI X-Ray Analysis)",
    description:
      "Integrated AI models with backend services to analyze X-ray images and deliver structured fracture detection results securely.",
  },
];

function Project() {
  return (
    <section
      id="projects"
      className="bg-[#0f172a] text-white py-28 px-6 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        
        <h2 className="text-4xl font-bold text-center">
          Enterprise <span className="text-[#00E5D0]">Case Studies</span>
        </h2>

        <p className="text-slate-400 text-center max-w-2xl mx-auto mt-4">
          Production-ready backend systems built with ASP.NET Core,
          SQL Server, and AI integrations — focused on scalability,
          security, and performance optimization.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1e293b] p-6 rounded-xl border border-white/10 hover:border-[#00E5D0] transition duration-300"
            >
              <h3 className="text-xl font-semibold text-[#00E5D0] mb-3">
                {project.title}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                {project.description}
              </p>

              <p className="text-green-400 text-xs mt-4">
                ✔ Designed for scalability and production environments
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Project;
