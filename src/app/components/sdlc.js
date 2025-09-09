"use client"
import { 
  FaSearch, 
  FaProjectDiagram, 
  FaCode, 
  FaBug, 
  FaRocket, 
  FaTools, 
  FaSync 
} from "react-icons/fa";

export default function Sdlc() {
  const steps = [
    { icon: FaSearch, title: "Requirement Analysis", desc: "Understanding client needs, gathering requirements, and feasibility check." },
    { icon: FaProjectDiagram, title: "System Design", desc: "Creating architecture, database schema, and UI/UX wireframes." },
    { icon: FaCode, title: "Development", desc: "Building software with modern frameworks & best practices." },
    { icon: FaBug, title: "Testing", desc: "QA testing, automation, and bug fixing for high quality." },
    { icon: FaRocket, title: "Deployment", desc: "Launching the product on secure servers." },
    { icon: FaTools, title: "Maintenance", desc: "Ongoing updates, bug fixes, and feature improvements." },
    { icon: FaSync, title: "Feedback & Review", desc: "Continuous feedback loop for agile improvement." },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Our Software Development Process</h2>
        <p className="text-gray-600 mb-12">
          We follow an advanced SDLC approach to ensure quality, scalability, and client satisfaction.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div 
                key={i}
                className="bg-white shadow-lg p-6 rounded-2xl hover:scale-105 transition"
              >
                <div className="text-4xl text-indigo-600 mb-4">
                  <Icon />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
