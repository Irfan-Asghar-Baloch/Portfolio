// src/Components/Services.jsx
import React from "react";
import { FaDatabase, FaLock, FaNetworkWired, FaDesktop, FaCode, FaCogs } from "react-icons/fa";

const services = [
  {
    title: "REST API Development",
    description:
      "Engineered secure and high-performance RESTful APIs using ASP.NET Core to power scalable web and mobile applications for real-world business needs.",
    icon: <FaNetworkWired size={32} />,
    gradient: "from-[#00E5D0] to-[#008C7E]",
  },
  {
    title: "Authentication & Security",
    description:
      "Implemented robust authentication systems using JWT and role-based access control to ensure secure access and data protection across applications.",
    icon: <FaLock size={32} />,
    gradient: "from-[#FF6A3D] to-[#FF3D6B]",
  },
  {
    title: "Database Optimization",
    description:
      "Designed and optimized database architectures with efficient indexing and query tuning to enhance system performance, reliability, and scalability.",
    icon: <FaDatabase size={32} />,
    gradient: "from-[#FFD700] to-[#FFA500]",
  },
  {
    title: "MVC Web Applications",
    description:
      "Developed enterprise-grade web applications using ASP.NET MVC following clean architecture principles and maintainable code standards.",
    icon: <FaCode size={32} />,
    gradient: "from-[#6A5ACD] to-[#483D8B]",
  },
  {
    title: "C# Desktop Applications",
    description:
      "Built reliable and user-focused desktop applications using WinForms and WPF to streamline business operations and automation processes.",
    icon: <FaDesktop size={32} />,
    gradient: "from-[#00CED1] to-[#20B2AA]",
  },
  {
    title: "System Integration & Maintenance",
    description:
      "Integrated third-party services and maintained backend systems to ensure stability, scalability, and long-term operational efficiency.",
    icon: <FaCogs size={32} />,
    gradient: "from-[#FF8C00] to-[#FF4500]",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="bg-[#111827] py-20 px-6 text-white"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Backend <span className="text-[#00E5D0]">Services</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative p-6 rounded-xl border border-white/10 bg-[#1e293b] overflow-hidden shadow-md transform transition-all duration-500 hover:scale-105 hover:shadow-xl cursor-pointer group"
            >
              {/* Gradient Accent */}
              <div
                className={`absolute -top-10 -left-10 w-32 h-32 rounded-full blur-2xl opacity-40 bg-gradient-to-br ${service.gradient} group-hover:opacity-70 transition-opacity duration-500`}
              ></div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-4 text-[#00E5D0]">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;