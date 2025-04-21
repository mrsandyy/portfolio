
import { Code, Database, Layout, User, Award, Layers, Cpu, PenTool } from "lucide-react";

const techStack = [
  { name: "React", icon: <Code className="h-5 w-5 text-portfolio-600" /> },
  { name: "TypeScript", icon: <PenTool className="h-5 w-5 text-portfolio-600" /> },
  { name: "Node.js", icon: <Cpu className="h-5 w-5 text-portfolio-600" /> },
  { name: "Next.js", icon: <Layers className="h-5 w-5 text-portfolio-600" /> },
  { name: "Tailwind", icon: <Layout className="h-5 w-5 text-portfolio-600" /> },
  { name: "MongoDB", icon: <Database className="h-5 w-5 text-portfolio-600" /> },
  { name: "Jest", icon: <Award className="h-5 w-5 text-portfolio-600" /> },
  { name: "Git", icon: <Code className="h-5 w-5 text-portfolio-600" /> }
];

const highlights = [
  {
    icon: <Award className="h-7 w-7 text-portfolio-700" />,
    title: "5+ years of professional experience",
  },
  {
    icon: <User className="h-7 w-7 text-portfolio-700" />,
    title: "Proven team player, mentoring & onboarding juniors",
  },
  {
    icon: <Layers className="h-7 w-7 text-portfolio-700" />,
    title: "Led scalable UI delivery in agile teams",
  },
  {
    icon: <PenTool className="h-7 w-7 text-portfolio-700" />,
    title: "Strong focus on maintainable, testable code",
  },
];

export function About() {
  return (
    <section id="about" className="py-12 bg-gradient-to-tr from-white via-portfolio-50 to-portfolio-100">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Skills & Stack */}
          <div>
            <h2 className="text-2xl font-bold text-portfolio-700 mb-3">Technical Skillset</h2>
            <div className="flex flex-wrap gap-3 mb-6">
              {techStack.map((skill) => (
                <span key={skill.name} className="flex items-center gap-1 bg-portfolio-200 text-portfolio-800 px-3 py-1 rounded-full font-medium shadow-sm text-sm hover:bg-portfolio-300">
                  {skill.icon} {skill.name}
                </span>
              ))}
            </div>
            <h3 className="text-lg font-semibold mb-2 text-portfolio-700">What Sets Me Apart</h3>
            <ul className="space-y-2">
              {highlights.map((hl, i) => (
                <li key={i} className="flex items-center gap-3 text-portfolio-800">
                  <span>{hl.icon}</span> <span>{hl.title}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Visual section / Strengths */}
          <div className="rounded-xl border-2 border-portfolio-100 bg-white/60 p-8 shadow-md flex flex-col items-center justify-center gap-6">
            <h3 className="text-xl font-bold text-portfolio-700 mb-3">At a Glance</h3>
            <div className="w-full flex flex-wrap justify-center gap-5">
              <div className="flex flex-col items-center gap-1">
                <span className="text-3xl font-bold text-portfolio-700">30+</span>
                <span className="text-sm text-portfolio-800">Projects</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-3xl font-bold text-portfolio-700">8</span>
                <span className="text-sm text-portfolio-800">Tech Stacks</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-3xl font-bold text-portfolio-700">95%</span>
                <span className="text-sm text-portfolio-800">Client Sat.</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-3xl font-bold text-portfolio-700">7+</span>
                <span className="text-sm text-portfolio-800">Team Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
