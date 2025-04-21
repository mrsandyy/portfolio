
import { Linkedin, Github, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  { label: "Role", value: "Frontend Developer" },
  { label: "Exp", value: "5+ yrs" },
  { label: "Stack", value: "React / TS / Node.js" },
  { label: "Team", value: "7+ Projects" }
];

const coreSkills = [
  "React", "TypeScript", "JavaScript", "Node.js",
  "Next.js", "Tailwind CSS", "Jest", "Git/GitHub"
];

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-gradient-to-br from-portfolio-50/70 to-white">
      <div className="container flex flex-col md:flex-row items-center gap-10 py-20">
        {/* Profile */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start gap-6 animate-fade-in">
          <div className="rounded-full overflow-hidden border-4 border-portfolio-200 shadow-lg w-40 h-40 mb-2 bg-gradient-to-tr from-portfolio-100 to-portfolio-300">
            {/* Placeholder image, replace with actual avatar */}
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-portfolio-700">John Doe</h1>
          <span className="inline-flex items-center gap-3">
            <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer"
              className="bg-portfolio-100 hover:bg-portfolio-200 p-2 rounded-full transition-colors">
              <Linkedin className="h-6 w-6 text-portfolio-600" />
            </a>
            <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer"
              className="bg-portfolio-100 hover:bg-portfolio-200 p-2 rounded-full transition-colors">
              <Github className="h-6 w-6 text-portfolio-600" />
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button size="sm" variant="outline" className="border-portfolio-600 text-portfolio-700 hover:bg-portfolio-50 font-semibold">
                <FileText className="h-4 w-4 mr-2" /> Resume
              </Button>
            </a>
          </span>
        </div>
        {/* Quick Summary */}
        <div className="w-full md:w-2/3 flex flex-col gap-6">
          <div className="rounded-xl border bg-portfolio-100/60 border-portfolio-200 grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 shadow-sm mb-2 animate-fade-in">
            {highlights.map(h => (
              <div key={h.label} className="flex flex-col items-center text-center">
                <span className="text-xs uppercase text-portfolio-700 font-semibold tracking-wide">{h.label}</span>
                <span className="text-xl font-bold text-portfolio-800">{h.value}</span>
              </div>
            ))}
          </div>
          {/* Core Skills */}
          <div>
            <h2 className="text-lg font-bold text-portfolio-700 mb-2 tracking-tight">Core Skills</h2>
            <div className="flex flex-wrap gap-3">
              {coreSkills.map(skill => (
                <span key={skill} className="bg-portfolio-200/80 text-portfolio-900 px-3 py-1 rounded-lg font-semibold shadow-sm text-sm hover:bg-portfolio-300 transition-colors">{skill}</span>
              ))}
            </div>
          </div>
          {/* Call to Action */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              size="lg"
              className="bg-portfolio-700 hover:bg-portfolio-800 text-white font-semibold shadow-md"
              onClick={() => {
                const el = document.querySelector("#experience");
                if (el) {
                  window.scrollTo({
                    top: el.getBoundingClientRect().top + window.scrollY - 90,
                    behavior: "smooth",
                  });
                }
              }}
            >
              View Experience
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
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
