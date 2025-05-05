
import React from "react";
import { Dialog, DialogContent, DialogTitle, DialogHeader, DialogDescription } from "@/components/ui/dialog";
import { Github, ExternalLink, Database, Server, Cpu, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface CaseStudyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    demoLink: string;
    repoLink: string;
    caseStudy: {
      headline: string;
      challenges: string;
      backendHighlights: string[];
      mainStack: string[];
    },
  } | null;
}

export function CaseStudyModal({ open, onOpenChange, project }: CaseStudyModalProps) {
  if (!project) return null;
  const { title, description, image, tags, demoLink, repoLink, caseStudy } = project;

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden rounded-xl bg-white">
        <div className="grid md:grid-cols-5 gap-0">
          {/* Left sidebar with project info */}
          <div className="md:col-span-2 bg-portfolio-50 p-6 flex flex-col">
            <div className="bg-white p-3 rounded-lg shadow-md mb-6">
              <img src={image} alt={title} className="w-full h-48 object-cover rounded-md" />
            </div>
            
            <h3 className="text-xl font-bold mb-2 text-portfolio-800">{title}</h3>
            <p className="text-sm text-portfolio-600 mb-4">{description}</p>
            
            <div className="flex flex-wrap gap-2 mb-5">
              {tags.map(tag => (
                <span 
                  key={tag} 
                  className="text-xs bg-portfolio-200 text-portfolio-700 px-2 py-0.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="mt-auto flex gap-3">
              <a href={demoLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button variant="default" size="sm" className="w-full bg-portfolio-600 hover:bg-portfolio-700">
                  <ExternalLink className="h-4 w-4 mr-1" /> Live Demo
                </Button>
              </a>
              <a href={repoLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button variant="outline" size="sm" className="w-full border-portfolio-300 hover:bg-portfolio-50">
                  <Github className="h-4 w-4 mr-1" /> View Code
                </Button>
              </a>
            </div>
          </div>
          
          {/* Right content with details */}
          <div className="md:col-span-3 px-7 py-8">
            <DialogHeader className="mb-6">
              <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
                <DialogTitle className="text-2xl font-bold text-portfolio-800 mb-2">{title}</DialogTitle>
                <DialogDescription className="text-lg font-medium text-portfolio-700">
                  {caseStudy.headline}
                </DialogDescription>
              </motion.div>
            </DialogHeader>
            
            <div className="space-y-6">
              <motion.div 
                initial="hidden" 
                animate="visible" 
                variants={fadeInUp} 
                className="bg-portfolio-50 p-4 rounded-lg border-l-4 border-portfolio-600"
              >
                <h3 className="font-bold text-portfolio-800 mb-2 flex items-center">
                  <Code className="h-5 w-5 mr-2 text-portfolio-600" /> Technical Challenge
                </h3>
                <p className="text-portfolio-700 text-sm">{caseStudy.challenges}</p>
              </motion.div>
              
              <motion.div 
                initial="hidden" 
                animate="visible" 
                variants={fadeInUp}
              >
                <h3 className="font-bold text-portfolio-800 mb-3 flex items-center">
                  <Server className="h-5 w-5 mr-2 text-portfolio-600" /> Backend Architecture
                </h3>
                
                <div className="space-y-4">
                  {caseStudy.backendHighlights.map((point, i) => (
                    <div 
                      key={i} 
                      className="bg-gradient-to-r from-portfolio-100 to-white p-3 rounded-lg border-l-2 border-portfolio-400"
                    >
                      <p className="text-sm text-portfolio-700">{point}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-5 flex flex-wrap gap-2">
                  {caseStudy.mainStack.map(stack => (
                    <span 
                      key={stack} 
                      className="flex items-center gap-1 bg-white px-2.5 py-1 rounded-full text-xs text-portfolio-700 font-medium border border-portfolio-200 shadow-sm"
                    >
                      {stack === "Node.js" && <Server className="h-3 w-3" />}
                      {stack === "TypeScript" && <Code className="h-3 w-3" />}
                      {stack === "PostgreSQL" && <Database className="h-3 w-3" />}
                      {stack}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
