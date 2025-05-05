
import React from "react";
import { Dialog, DialogContent, DialogTitle, DialogHeader, DialogDescription } from "@/components/ui/dialog";
import { Github, ExternalLink, Database, Server, Cpu, Code, Terminal, CheckCircle, Clock, Award, TrendingUp } from "lucide-react";
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

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden rounded-xl bg-gradient-to-br from-portfolio-50 via-white to-portfolio-50">
        <div className="grid md:grid-cols-5 gap-0">
          {/* Left sidebar with project info - Improved with lighter background and more blocks */}
          <motion.div 
            className="md:col-span-2 flex flex-col overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            {/* Header section with gradient */}
            <motion.div 
              variants={fadeInUp} 
              className="bg-gradient-to-br from-portfolio-600 to-portfolio-700 text-white p-6"
            >
              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg shadow-lg mb-4">
                <img src={image} alt={title} className="w-full h-36 object-cover rounded-md" />
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
              <p className="text-sm text-portfolio-100 mb-3">{description}</p>
              
              <div className="flex flex-wrap gap-2 mb-2">
                {tags.slice(0, 3).map(tag => (
                  <span 
                    key={tag} 
                    className="text-xs bg-white/20 text-white px-2 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
            
            {/* Tech stack section with light background */}
            <motion.div variants={fadeInUp} className="bg-portfolio-50 p-5">
              <h4 className="text-sm font-semibold mb-3 text-portfolio-700 flex items-center">
                <Cpu className="h-4 w-4 mr-2" />
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {caseStudy.mainStack.map(stack => (
                  <span 
                    key={stack} 
                    className="flex items-center gap-1 bg-white px-2.5 py-1 rounded-full text-xs text-portfolio-700 font-medium border border-portfolio-200 shadow-sm hover:bg-portfolio-100 transition-colors"
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
            
            {/* Timeline block */}
            <motion.div variants={fadeInUp} className="bg-white p-5 border-t border-portfolio-100">
              <h4 className="text-sm font-semibold mb-3 text-portfolio-700 flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                Project Timeline
              </h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="w-1 h-full bg-portfolio-200 relative mt-1.5">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-portfolio-500"></div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-portfolio-700">Planning & Architecture</p>
                    <p className="text-xs text-portfolio-600">2 weeks</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1 h-full bg-portfolio-200 relative mt-1.5">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-portfolio-500"></div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-portfolio-700">Core Development</p>
                    <p className="text-xs text-portfolio-600">8 weeks</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1 h-full bg-portfolio-200 relative mt-1.5">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-portfolio-500"></div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-portfolio-700">Testing & Deployment</p>
                    <p className="text-xs text-portfolio-600">3 weeks</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Metrics block */}
            <motion.div variants={fadeInUp} className="bg-portfolio-50 p-5 border-t border-portfolio-100">
              <h4 className="text-sm font-semibold mb-3 text-portfolio-700 flex items-center">
                <TrendingUp className="h-4 w-4 mr-2" />
                Key Metrics
              </h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white p-2 rounded-lg border border-portfolio-100 shadow-sm">
                  <p className="text-xs text-portfolio-600">API Response</p>
                  <p className="text-sm font-bold text-portfolio-800">50% Faster</p>
                </div>
                <div className="bg-white p-2 rounded-lg border border-portfolio-100 shadow-sm">
                  <p className="text-xs text-portfolio-600">Concurrent Users</p>
                  <p className="text-sm font-bold text-portfolio-800">10K+</p>
                </div>
              </div>
            </motion.div>
            
            {/* Links section */}
            <motion.div variants={fadeInUp} className="mt-auto p-5 bg-white border-t border-portfolio-100">
              <div className="flex gap-3">
                <a href={demoLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button variant="default" size="sm" className="w-full bg-portfolio-600 hover:bg-portfolio-700 transition-all">
                    <ExternalLink className="h-4 w-4 mr-1" /> Live Demo
                  </Button>
                </a>
                <a href={repoLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button variant="outline" size="sm" className="w-full border-portfolio-300 hover:bg-portfolio-50 transition-all">
                    <Github className="h-4 w-4 mr-1" /> View Code
                  </Button>
                </a>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right content with details */}
          <motion.div 
            className="md:col-span-3 px-7 py-8"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <DialogHeader className="mb-6">
              <motion.div variants={fadeInUp}>
                <div className="flex items-center justify-between mb-2">
                  <DialogTitle className="text-2xl font-bold text-portfolio-800">{title}</DialogTitle>
                  <span className="text-xs font-medium bg-portfolio-100 text-portfolio-700 px-2 py-1 rounded-full">Back-End Project</span>
                </div>
                <DialogDescription className="text-lg font-medium text-portfolio-700">
                  {caseStudy.headline}
                </DialogDescription>
              </motion.div>
            </DialogHeader>
            
            <div className="space-y-6">
              <motion.div variants={fadeInUp} className="bg-portfolio-50 p-4 rounded-lg border-l-4 border-portfolio-600">
                <h3 className="font-bold text-portfolio-800 mb-2 flex items-center">
                  <Code className="h-5 w-5 mr-2 text-portfolio-600" /> Technical Challenge
                </h3>
                <p className="text-portfolio-700 text-sm">{caseStudy.challenges}</p>
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <h3 className="font-bold text-portfolio-800 mb-3 flex items-center">
                  <Server className="h-5 w-5 mr-2 text-portfolio-600" /> Back-End Architecture Highlights
                </h3>
                <motion.ul 
                  className="space-y-3 pl-2"
                  variants={stagger}
                  initial="hidden"
                  animate="visible"
                >
                  {caseStudy.backendHighlights.map((point, i) => (
                    <motion.li 
                      key={i} 
                      className="flex gap-3 text-portfolio-700"
                      variants={fadeInUp}
                    >
                      <CheckCircle className="h-5 w-5 text-portfolio-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{point}</span>
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
                    <h4 className="text-xs font-semibold text-portfolio-600 flex items-center">
                      <TrendingUp className="h-3 w-3 mr-1" /> Performance
                    </h4>
                    <p className="text-sm font-bold text-portfolio-800">50% Faster API Response</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-portfolio-200 shadow-sm">
                    <h4 className="text-xs font-semibold text-portfolio-600 flex items-center">
                      <Award className="h-3 w-3 mr-1" /> Recognition
                    </h4>
                    <p className="text-sm font-bold text-portfolio-800">Company Excellence Award</p>
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
