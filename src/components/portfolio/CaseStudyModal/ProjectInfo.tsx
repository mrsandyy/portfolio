import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Server, Terminal, Database, Code } from "lucide-react";

interface ProjectInfoProps {
  title: string;
  description: string;
  image: string;
  demoLink: string;
  repoLink: string;
  caseStudy: {
    mainStack: string[];
  };
  animations: {
    fadeInUp: {
      hidden: { opacity: number; y: number };
      visible: { opacity: number; y: number };
    };
    stagger: {
      visible: {
        transition: {
          staggerChildren: number;
        };
      };
    };
  };
}

export function ProjectInfo({ 
  title, 
  description, 
  image, 
  demoLink, 
  repoLink, 
  caseStudy,
  animations 
}: ProjectInfoProps) {
  return (
    <motion.div 
      className="md:col-span-2 p-5 md:p-6 bg-gradient-to-br from-portfolio-700 to-portfolio-600 text-white flex flex-col"
      initial="hidden"
      animate="visible"
      variants={animations.stagger}
    >
      <motion.div variants={animations.fadeInUp} className="mb-4">
        <div className="bg-white p-1 rounded-lg shadow-lg">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-28 md:h-36 object-cover rounded-md" 
            style={{ aspectRatio: "16/9", objectFit: "cover" }}
            loading="lazy"
          />
        </div>
      </motion.div>
      
      <motion.div variants={animations.fadeInUp} className="bg-portfolio-800/40 rounded-lg p-4 backdrop-blur-sm mb-4">
        <h3 className="text-lg md:text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-xs md:text-sm text-portfolio-100">{description}</p>
      </motion.div>
      
      <motion.div variants={animations.fadeInUp} className="mb-4">
        <h4 className="text-sm font-semibold mb-2 text-portfolio-200">Tech Stack</h4>
        <div className="flex flex-wrap gap-2 mb-4">
          {caseStudy.mainStack.map(stack => (
            <span 
              key={stack} 
              className="flex items-center gap-1 bg-white/10 px-2 py-1 rounded-full text-xs text-white font-medium border border-white/20"
            >
              {stack === "Node.js" && <Server className="h-3 w-3" />}
              {stack === "TypeScript" && <Terminal className="h-3 w-3" />}
              {stack === "PostgreSQL" && <Database className="h-3 w-3" />}
              {stack === "GraphQL" && <Code className="h-3 w-3" />}
              {stack === "WebSockets" && <Code className="h-3 w-3" />}
              {stack === "Redis" && <Database className="h-3 w-3" />}
              {stack === "Docker" && <Server className="h-3 w-3" />}
              {stack === "Stripe" && <Code className="h-3 w-3" />}
              {stack}
            </span>
          ))}
        </div>
      </motion.div>
      
      <motion.div variants={animations.fadeInUp} className="flex gap-3 mt-auto pt-4">
        <a href={demoLink} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="sm" className="bg-white text-portfolio-700 hover:bg-portfolio-100 hover:text-portfolio-800 transition-all border-none">
            <ExternalLink className="h-4 w-4 mr-1" /> Live Demo
          </Button>
        </a>
        <a href={repoLink} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="sm" className="bg-transparent text-white border-white/50 hover:bg-white/10 transition-all">
            <Github className="h-4 w-4 mr-1" /> View Code
          </Button>
        </a>
      </motion.div>
    </motion.div>
  );
} 