
import { ArrowUp, Linkedin, Github, FileText } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-portfolio-700">Sandeep Vishnoi</h2>
            <p className="text-muted-foreground">
              Backend Engineer with a focus on team impact and reliable delivery. Open to new opportunities and relocation.
            </p>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-4"
            >
              <button className="flex items-center px-4 py-2 bg-portfolio-700 text-white rounded-lg hover:bg-portfolio-800 transition-colors">
                <FileText className="h-4 w-4 mr-2" /> Resume (PDF)
              </button>
            </a>
          </div>
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-portfolio-600 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-portfolio-600 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-portfolio-600 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="text-muted-foreground hover:text-portfolio-600 transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-portfolio-600 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">Jaipur, Rajasthan, IN</li>
              <li>
                <a
                  href="mailto:contact@mrsandy.in"
                  className="text-muted-foreground hover:text-portfolio-600 transition-colors"
                >
                  contact@mrsandy.in
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-portfolio-600 transition-colors"
                >
                  [Redacted due to Privacy]
                </a>
              </li>
            </ul>
            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              <a
                href="https://linkedin.com/in/sandeepvishnoi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-portfolio-100 rounded-full hover:bg-portfolio-200 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4 text-portfolio-600" />
              </a>
              <a
                href="https://github.com/mrsandyy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-portfolio-100 rounded-full hover:bg-portfolio-200 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4 text-portfolio-600" />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-portfolio-100 rounded-full hover:bg-portfolio-200 transition-colors"
                aria-label="Resume"
              >
                <FileText className="h-4 w-4 text-portfolio-600" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} Mr Sandy. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="p-2 bg-portfolio-100 rounded-full hover:bg-portfolio-200 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4 text-portfolio-600" />
          </button>
        </div>
      </div>
    </footer>
  );
}
