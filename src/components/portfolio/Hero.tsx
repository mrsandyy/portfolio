
import { ArrowDown, FileText, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToNext = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.getBoundingClientRect().top + window.scrollY - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-50/50 to-transparent -z-10"></div>
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-portfolio-200 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-portfolio-300 rounded-full blur-3xl opacity-20 -z-10"></div>
      <div className="container">
        <div className="space-y-6 max-w-3xl animate-fade-in">
          <h2 className="text-portfolio-600 font-medium">👋 Hi, I'm</h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading">
            <span className="block">John Doe</span>
            <span className="block text-portfolio-600">Frontend Developer</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl">
            Passionate about building maintainable and efficient web applications, I bring 5+ years of practical experience, strong teamwork, and a love for solving technical challenges. Currently looking for new opportunities to join an innovative engineering team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              className="bg-portfolio-600 hover:bg-portfolio-700 text-white"
              onClick={() => {
                const el = document.querySelector("#projects");
                if (el) {
                  window.scrollTo({
                    top: el.getBoundingClientRect().top + window.scrollY - 100,
                    behavior: "smooth",
                  });
                }
              }}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-portfolio-600 text-portfolio-600 hover:bg-portfolio-50"
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) {
                  window.scrollTo({
                    top: el.getBoundingClientRect().top + window.scrollY - 100,
                    behavior: "smooth",
                  });
                }
              }}
            >
              Contact Me
            </Button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-portfolio-600 text-portfolio-600 hover:bg-portfolio-50"
              >
                <FileText className="h-5 w-5 mr-2" /> Resume (PDF)
              </Button>
            </a>
          </div>
          <div className="flex gap-3 pt-2">
            <a
              href="https://linkedin.com/in/johndoe"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-full bg-portfolio-100 hover:bg-portfolio-200 transition-colors"
            >
              <Linkedin className="h-5 w-5 text-portfolio-600" />
            </a>
            <a
              href="https://github.com/johndoe"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-full bg-portfolio-100 hover:bg-portfolio-200 transition-colors"
            >
              <Github className="h-5 w-5 text-portfolio-600" />
            </a>
          </div>
          <div>
            <span className="text-sm text-portfolio-700 bg-portfolio-100 px-3 py-1 rounded-full">Open to work & relocation • Immediate start</span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToNext}
          className="rounded-full border border-muted-foreground/20"
        >
          <ArrowDown className="h-5 w-5 text-muted-foreground" />
        </Button>
      </div>
    </section>
  );
}
