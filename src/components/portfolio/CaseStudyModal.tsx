
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogDescription } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetHeader, SheetDescription } from "@/components/ui/sheet";
import { Github, ExternalLink, Database, Server, Cpu, Code, Terminal, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useBreakpoint } from "@/hooks/use-mobile";

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
  const { isMobile } = useBreakpoint();
  const { title, description, image, tags, demoLink, repoLink, caseStudy } = project;

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // For mobile devices, use the Sheet component which is designed for mobile
  if (isMobile) {
    return (
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent className="px-0 py-0 overflow-y-auto max-h-[90vh]">
          <div className="bg-gradient-to-br from-portfolio-700 to-portfolio-600 text-white p-5">
            <div className="mb-4">
              <div className="bg-white p-1 rounded-lg shadow-lg">
                <img src={image} alt={title} className="w-full h-28 object-cover rounded-md" />
              </div>
            </div>
            
            <div className="bg-portfolio-800/40 rounded-lg p-4 backdrop-blur-sm mb-4">
              <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
              <p className="text-xs text-portfolio-100">{description}</p>
            </div>
            
            <div className="mb-4">
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
            </div>
            
            <div className="flex flex-col space-y-2 w-full">
              <a href={demoLink} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button variant="outline" size="sm" className="w-full bg-white text-portfolio-700 hover:bg-portfolio-100 hover:text-portfolio-800 transition-all border-none">
                  <ExternalLink className="h-4 w-4 mr-1" /> Live Demo
                </Button>
              </a>
              <a href={repoLink} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button variant="outline" size="sm" className="w-full bg-transparent text-white border-white/50 hover:bg-white/10 transition-all">
                  <Github className="h-4 w-4 mr-1" /> View Code
                </Button>
              </a>
            </div>
          </div>
          
          <div className="px-5 py-6">
            <SheetHeader className="mb-5 text-left">
              <div className="flex items-start justify-between mb-2 flex-col gap-2">
                <h2 className="text-xl font-bold text-portfolio-800">{title}</h2>
                <span className="text-xs font-medium bg-portfolio-100 text-portfolio-700 px-2 py-1 rounded-full">Back-End Project</span>
              </div>
              <SheetDescription className="text-base font-medium text-portfolio-700">
                {caseStudy.headline}
              </SheetDescription>
            </SheetHeader>
            
            <div className="space-y-5">
              <div className="bg-portfolio-50 p-4 rounded-lg border-l-4 border-portfolio-600">
                <h3 className="font-bold text-portfolio-800 mb-2 flex items-center">
                  <Code className="h-5 w-5 mr-2 text-portfolio-600" /> Technical Challenge
                </h3>
                <p className="text-portfolio-700 text-sm">{caseStudy.challenges}</p>
              </div>
              
              <div>
                <h3 className="font-bold text-portfolio-800 mb-3 flex items-center">
                  <Server className="h-5 w-5 mr-2 text-portfolio-600" /> Back-End Highlights
                </h3>
                <ul className="space-y-2 pl-2">
                  {caseStudy.backendHighlights.map((point, i) => (
                    <li 
                      key={i} 
                      className="flex gap-2 text-portfolio-700"
                    >
                      <CheckCircle className="h-5 w-5 text-portfolio-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  // For desktop, use the Dialog component
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden rounded-xl bg-gradient-to-br from-portfolio-50 via-white to-portfolio-50">
        <div className="grid md:grid-cols-5 gap-0">
          {/* Left sidebar with project info */}
          <motion.div 
            className="md:col-span-2 p-5 md:p-6 bg-gradient-to-br from-portfolio-700 to-portfolio-600 text-white flex flex-col"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="mb-4">
              <div className="bg-white p-1 rounded-lg shadow-lg">
                <img src={image} alt={title} className="w-full h-28 md:h-36 object-cover rounded-md" />
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="bg-portfolio-800/40 rounded-lg p-4 backdrop-blur-sm mb-4">
              <h3 className="text-lg md:text-xl font-bold mb-2 text-white">{title}</h3>
              <p className="text-xs md:text-sm text-portfolio-100">{description}</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="mb-4">
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
            
            <motion.div variants={fadeInUp} className="flex gap-3 mt-auto pt-4">
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
            variants={stagger}
          >
            <DialogHeader className="mb-5 md:mb-6">
              <motion.div variants={fadeInUp}>
                <div className="flex items-start md:items-center justify-between mb-2 flex-col md:flex-row gap-2 md:gap-0">
                  <DialogHeader className="p-0 space-y-0">
                    <h2 className="text-xl md:text-2xl font-bold text-portfolio-800">{title}</h2>
                  </DialogHeader>
                  <span className="text-xs font-medium bg-portfolio-100 text-portfolio-700 px-2 py-1 rounded-full">Back-End Project</span>
                </div>
                <DialogDescription className="text-base md:text-lg font-medium text-portfolio-700">
                  {caseStudy.headline}
                </DialogDescription>
              </motion.div>
            </DialogHeader>
            
            <div className="space-y-5 md:space-y-6">
              <motion.div variants={fadeInUp} className="bg-portfolio-50 p-4 rounded-lg border-l-4 border-portfolio-600">
                <h3 className="font-bold text-portfolio-800 mb-2 flex items-center">
                  <Code className="h-5 w-5 mr-2 text-portfolio-600" /> Technical Challenge
                </h3>
                <p className="text-portfolio-700 text-sm">{caseStudy.challenges}</p>
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <h3 className="font-bold text-portfolio-800 mb-3 flex items-center">
                  <Server className="h-5 w-5 mr-2 text-portfolio-600" /> Back-End Highlights
                </h3>
                <motion.ul 
                  className="space-y-2 md:space-y-3 pl-2"
                  variants={stagger}
                  initial="hidden"
                  animate="visible"
                >
                  {caseStudy.backendHighlights.map((point, i) => (
                    <motion.li 
                      key={i} 
                      className="flex gap-2 md:gap-3 text-portfolio-700"
                      variants={fadeInUp}
                    >
                      <CheckCircle className="h-5 w-5 text-portfolio-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm">{point}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="pt-2 mt-4">
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
    </Dialog>
  );
}
