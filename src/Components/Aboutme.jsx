import React from "react";
import Aboutimg from "../assets/imgAbout.png";

function Aboutme() {
  return (
    <section
      id="about"
      className="bg-[#222831] text-white px-6 md:px-12 py-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        <div className="flex-1">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Backend <span className="text-[#00ADB5]">Expertise</span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Backend-focused .NET engineer with experience building enterprise systems,
            healthcare platforms, and data-intensive applications. Specialized in designing
            scalable REST APIs, secure authentication systems, and structured architectures.
          </p>

          <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
            <div>✔ RESTful API Architecture</div>
            <div>✔ Clean Architecture</div>
            <div>✔ JWT & Role Management</div>
            <div>✔ SQL Performance Optimization</div>
            <div>✔ Secure Data Handling</div>
            <div>✔ Scalable System Design</div>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src={Aboutimg}
            alt="Backend Development"
            className="w-80 rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Aboutme;
