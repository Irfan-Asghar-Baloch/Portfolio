// src/Components/WhyWorkWithMe.jsx
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const points = [
  "Clean & Scalable Architecture",
  "Production-Ready Code",
  "Secure Authentication & Data Protection",
  "Clear & Transparent Communication",
  "On-Time Project Delivery",
];

function WhyWorkWithMe() {
  return (
    <section
      id="why-me"
      className="bg-[#111827] text-white py-24 px-6"
    >
      <div className="max-w-5xl mx-auto text-center">
        
        <h2 className="text-4xl font-bold">
          Why Work <span className="text-[#00E5D0]">With Me?</span>
        </h2>

        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
          I focus on delivering scalable, secure, and production-ready backend
          systems that solve real business problems — not just writing code.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-12 text-left">
          {points.map((point, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-[#1e293b] p-5 rounded-xl border border-white/10 hover:border-[#00E5D0] transition duration-300"
            >
              <FaCheckCircle className="text-[#00E5D0]" size={20} />
              <span className="text-gray-300 text-sm">{point}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyWorkWithMe;