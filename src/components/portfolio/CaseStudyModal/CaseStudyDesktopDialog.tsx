import React from "react";
import { DialogContent, DialogHeader, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Github, ExternalLink, Database, Server, Cpu, Code, Terminal, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ProjectType } from "./types";

interface CaseStudyDesktopDialogProps {
  project: ProjectType;
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

export function CaseStudyDesktopDialog({ project, animations }: CaseStudyDesktopDialogProps) {
  const { title, description, image, demoLink, repoLink, caseStudy } = project;

  return (
    <DialogContent className="max-w-4xl p-0 overflow-hidden rounded-xl bg-gradient-to-br from-portfolio-50 via-white to-portfolio-50">
      <DialogTitle className="sr-only">Project Case Study: {title}</DialogTitle>
      <div className="grid md:grid-cols-5 gap-0">
        {/* Left sidebar with project info */}
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
        
        {/* Right content with details */}
        <motion.div 
          className="md:col-span-3 px-5 py-6 md:px-7 md:py-8"
          initial="hidden"
          animate="visible"
          variants={animations.stagger}
        >
          <DialogHeader className="mb-5 md:mb-6">
            <DialogTitle className="text-xl md:text-2xl font-bold text-portfolio-800">{title}</DialogTitle>
            <motion.div variants={animations.fadeInUp}>
              <div className="flex items-start md:items-center justify-between mb-2 flex-col md:flex-row gap-2 md:gap-0">
                <span className="text-xs font-medium bg-portfolio-100 text-portfolio-700 px-2 py-1 rounded-full">Back-End Project</span>
              </div>
              <DialogDescription className="text-base md:text-lg font-medium text-portfolio-700">
                {caseStudy.headline}
              </DialogDescription>
            </motion.div>
          </DialogHeader>
          
          <div className="space-y-5 md:space-y-6">
            <motion.div variants={animations.fadeInUp} className="bg-portfolio-50 p-4 rounded-lg border-l-4 border-portfolio-600">
              <h3 className="font-bold text-portfolio-800 mb-2 flex items-center">
                <Code className="h-5 w-5 mr-2 text-portfolio-600" /> Technical Challenge
              </h3>
              <p className="text-portfolio-700 text-sm">{caseStudy.challenges}</p>
            </motion.div>
            
            <motion.div variants={animations.fadeInUp}>
              <h3 className="font-bold text-portfolio-800 mb-3 flex items-center">
                <Server className="h-5 w-5 mr-2 text-portfolio-600" /> Back-End Highlights
              </h3>
              <motion.ul 
                className="space-y-2 md:space-y-3 pl-2"
                variants={animations.stagger}
                initial="hidden"
                animate="visible"
              >
                {caseStudy.backendHighlights.map((point, i) => (
                  <motion.li 
                    key={i} 
                    className="flex gap-2 md:gap-3 text-portfolio-700"
                    variants={animations.fadeInUp}
                  >
                    <CheckCircle className="h-5 w-5 text-portfolio-600 flex-shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm">{point}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            
            <motion.div variants={animations.fadeInUp} className="pt-2 mt-4">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-portfolio-800">Key Achievements</h3>
                <span className="text-xs bg-portfolio-200 text-portfolio-700 px-2 py-1 rounded-full">Lead Developer Role</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-3">
                <div className="bg-white p-3 rounded-lg border border-portfolio-200 shadow-sm">
                  <h4 className="text-xs font-semibold text-portfolio-600">Performance</h4>
                  <p className="text-sm font-bold text-portfolio-800">50% Faster API Response</p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-portfolio-200 shadow-sm">
                  <h4 className="text-xs font-semibold text-portfolio-600">Scale</h4>
                  <p className="text-sm font-bold text-portfolio-800">10K+ Concurrent Users</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </DialogContent>
  );
}
