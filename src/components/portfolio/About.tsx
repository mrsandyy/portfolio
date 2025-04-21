
import { Cpu, Database, Server, Code, Terminal, FileText } from "lucide-react";

const skills = [
  { name: "Node.js", icon: <Server className="h-6 w-6 text-portfolio-600" /> },
  { name: "TypeScript", icon: <Terminal className="h-6 w-6 text-portfolio-600" /> },
  { name: "SQL / MongoDB", icon: <Database className="h-6 w-6 text-portfolio-600" /> },
  { name: "REST & GraphQL APIs", icon: <Code className="h-6 w-6 text-portfolio-600" /> },
  { name: "CI/CD & DevOps", icon: <Cpu className="h-6 w-6 text-portfolio-600" /> },
  { name: "Testing (Jest)", icon: <FileText className="h-6 w-6 text-portfolio-600" /> },
];

const highlights = [
  {
    icon: <Cpu className="h-7 w-7 text-portfolio-700" />,
    title: "Backend Architecture & Design",
  },
  {
    icon: <Server className="h-7 w-7 text-portfolio-700" />,
    title: "API Engineering & Integrations",
  },
  {
    icon: <Database className="h-7 w-7 text-portfolio-700" />,
    title: "Database Modeling (SQL/NoSQL)",
  },
  {
    icon: <Terminal className="h-7 w-7 text-portfolio-700" />,
    title: "Deployment Automation",
  },
];

export function About() {
  return (
    <section id="about" className="py-10 bg-gradient-to-tr from-white via-portfolio-50 to-portfolio-100">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Skills, vertical, focused, no paragraphs */}
          <div>
            <h2 className="text-2xl font-extrabold text-portfolio-700 mb-4">Core Back-End Skills</h2>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  className="flex items-center gap-2 bg-portfolio-200 text-portfolio-800 px-4 py-2 rounded-lg font-semibold shadow-sm text-base hover:bg-portfolio-300 border border-portfolio-100 transition-all"
                >
                  {skill.icon} {skill.name}
                </span>
              ))}
            </div>
            <h3 className="text-lg font-semibold mb-3 text-portfolio-700">Strengths</h3>
            <ul className="space-y-3">
              {highlights.map((hl, i) => (
                <li key={i} className="flex items-center gap-3 text-portfolio-800 font-medium">
                  <span>{hl.icon}</span> <span>{hl.title}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Immediate “Snapshot” */}
          <div className="rounded-xl border-2 border-portfolio-100 bg-white/60 p-8 shadow-md flex flex-col items-center justify-center gap-6">
            <h3 className="text-xl font-bold text-portfolio-700 mb-2">In Numbers</h3>
            <div className="w-full flex flex-wrap justify-center gap-7">
              <div className="flex flex-col items-center gap-1">
                <span className="text-4xl font-bold text-portfolio-700">30+</span>
                <span className="text-base text-portfolio-800">Production Systems</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-4xl font-bold text-portfolio-700">5+ yrs</span>
                <span className="text-base text-portfolio-800">Backend Exp.</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-4xl font-bold text-portfolio-700">200k+</span>
                <span className="text-base text-portfolio-800">Users Served</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-4xl font-bold text-portfolio-700">10+</span>
                <span className="text-base text-portfolio-800">Team Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
