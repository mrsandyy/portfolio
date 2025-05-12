
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Linkedin, Github, FileText} from "lucide-react";

export function HeroActions() {
  return (
    <>      
      <motion.div 
        className="flex gap-4 pt-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <Button
          size="lg"
          className="bg-portfolio-700 hover:bg-portfolio-800 text-white font-semibold shadow-md hover:shadow-lg transition-all"
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
          className="border-portfolio-700 text-portfolio-700 hover:bg-portfolio-100 font-semibold hover:shadow-md transition-all"
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
      </motion.div>

      <motion.div 
        className="flex gap-3 pt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <a 
          href="https://www.linkedin.com/in/sandeepvishnoi/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-portfolio-100 hover:bg-portfolio-200 p-2 rounded-full transition-colors"
          aria-label="View LinkedIn"
        >
          <Linkedin className="h-6 w-6 text-portfolio-700" />
        </a>
        <a 
          href="https://github.com/mrsandyy/" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-portfolio-100 hover:bg-portfolio-200 p-2 rounded-full transition-colors"
          aria-label="View GitHub"
        >
          <Github className="h-6 w-6 text-portfolio-700" />
        </a>
          <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-portfolio-100 hover:bg-portfolio-200 p-2 rounded-full transition-colors"
          aria-label="View Resume"
        >
          <FileText className="h-6 w-6 text-portfolio-700" />
        </a>

        {/* <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group"
        >
          <Button size="sm" variant="outline" className="border-portfolio-600 text-portfolio-700 hover:bg-portfolio-50 font-semibold group-hover:shadow-md transition-all">
            <FileText className="h-4 w-4 mr-2" /> Resume
          </Button>
        </a> */}
      </motion.div>

    </>
  );
}
