

const projects = [
  {title: "EHR AI Demo Agent — In Development", description: "An AI-assisted meeting demo at MaxRemind connecting voice, meeting integrations and EHR screen sharing.", impact: ["Sequential greeting and introduction audio with speech-provider fallbacks", "Screen-share workflow and runtime telemetry", "EHR login and dashboard automation remain ongoing"]},
  {title: "Enterprise MIS — Professional Work", description: "Backend contributions for HR, payroll, attendance, loans and medical workflows using ASP.NET Core, Dapper and SQL Server.", impact: ["Paginated APIs and filtered reporting", "Transactional updates and attachment handling", "Excel exports and stored-procedure optimization"]},
  {title: "EMR & Claims — Professional Work", description: "Healthcare application integrations connecting imported claim data to patient, insurance and charge workflows.", impact: ["Excel import validation and duplicate checks", "Patient, payer and physician mapping", "HL7 parsing and application maintenance"]},
  {title: "MaxChat — Professional Work", description: "Backend contributions to messaging and communication workflows within the MaxRemind ecosystem.", impact: ["SignalR chat events and APIs", "Real-time communication integrations", "Database query and workflow improvements"]},
  {title: "LLM Support API — Practice Project", description: "A Python/FastAPI support service using Gemini, structured responses and order-service tool integrations.", impact: ["Intent, order ID and priority extraction", "RAG knowledge retrieval", "External API timeout and error handling"]},
];

function Project() {
  return (
    <section
      id="projects"
      className="bg-[#0f172a] text-white py-28 px-6 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        
        <h2 className="text-4xl font-bold text-center">
          Selected <span className="text-[#00E5D0]">Work</span>
        </h2>

        <p className="text-slate-400 text-center max-w-2xl mx-auto mt-4">
          Professional contributions and practice projects across .NET, Python and AI. Employer work is described at a high level; internal source code and demos are not publicly linked.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1e293b] p-6 rounded-xl border border-white/10 hover:border-[#00E5D0] hover:-translate-y-2 transition duration-300 shadow-md hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold text-[#00E5D0] mb-3">
                {project.title}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <ul className="space-y-2">
                {project.impact.map((point, i) => (
                  <li
                    key={i}
                    className="text-green-400 text-xs flex items-start gap-2"
                  >
                    <span>✔</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Project;