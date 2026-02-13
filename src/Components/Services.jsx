import React from "react";

function Services() {
  return (
    <section
      id="services"
      className="bg-[#111827] py-20 px-6 text-white"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center">
          Backend <span className="text-[#00E5D0]">Services</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-[#1e293b] p-8 rounded-xl border border-white/10">
            <h3 className="text-xl font-semibold text-[#00E5D0] mb-3">
              REST API Development
            </h3>
            <p className="text-gray-300 text-sm">
              Secure and scalable RESTful APIs using ASP.NET Core.
            </p>
          </div>

          <div className="bg-[#1e293b] p-8 rounded-xl border border-white/10">
            <h3 className="text-xl font-semibold text-[#00E5D0] mb-3">
              Authentication & Security
            </h3>
            <p className="text-gray-300 text-sm">
              JWT authentication and role-based access control implementation.
            </p>
          </div>

          <div className="bg-[#1e293b] p-8 rounded-xl border border-white/10">
            <h3 className="text-xl font-semibold text-[#00E5D0] mb-3">
              Database Optimization
            </h3>
            <p className="text-gray-300 text-sm">
              Query optimization, indexing, and scalable database design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
