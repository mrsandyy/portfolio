
import { Linkedin, Github, FileText, Database, Server, Cpu, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

const coreSkills = [
  { label: "Node.js", icon: <Server className="h-5 w-5 text-portfolio-700" /> },
  { label: "TypeScript", icon: <Terminal className="h-5 w-5 text-portfolio-700" /> },
  { label: "SQL / MongoDB", icon: <Database className="h-5 w-5 text-portfolio-700" /> },
  { label: "API Design", icon: <Cpu className="h-5 w-5 text-portfolio-700" /> },
  { label: "Testing (Jest)", icon: <Terminal className="h-5 w-5 text-portfolio-700" /> },
  { label: "Cloud/Deploy", icon: <Server className="h-5 w-5 text-portfolio-700" /> },
];

const highlights = [
  { label: "Experience", value: "5+ yrs", desc: "Professional Engineering" },
  { label: "Systems Built", value: "30+", desc: "Production Projects" },
  { label: "Team Projects", value: "10+", desc: "Collaborative Dev" },
  { label: "Stack", value: "Node, TS, SQL", desc: "Modern Technologies" },
];

export function Hero() {
  return (
    <section id="home" className="min-h-[70vh] pt-28 pb-10 bg-gradient-to-br from-portfolio-50/70 to-white relative overflow-hidden">
      <div className="container flex flex-col md:flex-row-reverse gap-12 md:gap-16 items-center justify-between">
        {/* Visual */}
        <div className="hidden md:flex flex-col items-center flex-1">
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-portfolio-200 max-w-xs hover:shadow-portfolio-300 
              transition-all duration-500 bg-gradient-to-tl from-portfolio-100/90 to-white animate-fade-in"
          >
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="backend dev setup"
              className="w-full h-60 object-cover"
            />
            <div className="absolute top-2 right-2 bg-white/70 px-2 py-1 rounded text-xs text-portfolio-700 font-bold shadow">Backend</div>
          </div>
        </div>
        {/* Intro & Info */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <div className="mb-3 flex items-center gap-3">
            <span className="block px-3 py-1 rounded-lg font-bold text-white bg-portfolio-700 shadow text-sm tracking-wide">Back-End Engineer</span>
            <span className="block px-3 py-1 rounded-lg bg-portfolio-200 text-portfolio-700 font-semibold">Available Now</span>
          </div>
          <h1 className="font-bold text-4xl sm:text-5xl text-portfolio-800 mb-2 text-center md:text-left leading-tight">
            Strong<br />
            <span className="text-gradient bg-gradient-to-r from-portfolio-700 via-blue-500 to-purple-300 bg-clip-text text-transparent">
              Backend Engineering
            </span>
          </h1>
          <div className="flex gap-3 py-2">
            <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer"
              className="bg-portfolio-100 hover:bg-portfolio-200 p-2 rounded-full transition-colors"
              aria-label="View LinkedIn"
            >
              <Linkedin className="h-6 w-6 text-portfolio-700" />
            </a>
            <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer"
              className="bg-portfolio-100 hover:bg-portfolio-200 p-2 rounded-full transition-colors"
              aria-label="View GitHub"
            >
              <Github className="h-6 w-6 text-portfolio-700" />
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button size="sm" variant="outline" className="border-portfolio-600 text-portfolio-700 hover:bg-portfolio-50 font-semibold">
                <FileText className="h-4 w-4 mr-2" /> Resume
              </Button>
            </a>
          </div>
          <div className="w-full flex flex-wrap gap-4 mt-7 mb-6 justify-center md:justify-start">
            {coreSkills.map(skill => (
              <span key={skill.label} className="flex items-center gap-2 bg-portfolio-200/80 text-portfolio-900 px-3 py-1 rounded-lg font-semibold shadow-sm text-sm hover:bg-portfolio-300 border border-portfolio-100 transition-all">
                {skill.icon} {skill.label}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 w-full max-w-lg mx-auto mb-7">
            {highlights.map(h => (
              <div key={h.label} className="flex flex-col items-center rounded-xl bg-portfolio-100 border border-portfolio-200 px-4 py-3 shadow-sm hover:shadow-md transition-all text-center">
                <span className="text-xs uppercase font-semibold text-portfolio-700 tracking-wide">{h.label}</span>
                <span className="text-2xl font-bold text-portfolio-800 leading-tight">{h.value}</span>
                <span className="text-xs text-portfolio-700">{h.desc}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-4 pt-2">
            <Button
              size="lg"
              className="bg-portfolio-700 hover:bg-portfolio-800 text-white font-semibold shadow-md"
              onClick={() => {
                const el = document.querySelector("#projects");
                if (el) {
                  window.scrollTo({
                    top: el.getBoundingClientRect().top + window.scrollY - 90,
                    behavior: "smooth",
                  });
                }
              }}
            >
              See Case Studies
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-portfolio-700 text-portfolio-700 hover:bg-portfolio-100 font-semibold"
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) {
                  window.scrollTo({
                    top: el.getBoundingClientRect().top + window.scrollY - 90,
                    behavior: "smooth",
                  });
                }
              }}
            >
              Let's Connect
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
