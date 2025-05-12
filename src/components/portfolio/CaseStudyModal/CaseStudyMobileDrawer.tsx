
import React from "react";
import { DrawerContent, DrawerHeader, DrawerDescription } from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Github, ExternalLink, Database, Server, Cpu, Code, Terminal, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectType } from "./types";

interface CaseStudyMobileDrawerProps {
  project: ProjectType;
}

export function CaseStudyMobileDrawer({ project }: CaseStudyMobileDrawerProps) {
  const { title, description, image, demoLink, repoLink, caseStudy, tags } = project;

  return (
    <DrawerContent className="px-0 py-0 overflow-hidden rounded-t-xl max-h-[85vh]">
      <ScrollArea className="max-h-[85vh] h-[85vh] overflow-y-auto">
        <div className="flex flex-col">
          {/* Top section with project info */}
          <div className="bg-gradient-to-br from-portfolio-700 to-portfolio-600 text-white p-4 md:p-5">
            <div className="mb-4">
              <div className="bg-white p-1 rounded-lg shadow-lg">
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full object-cover rounded-md" 
                  style={{ aspectRatio: "16/9", objectFit: "cover" }}
                />
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
          
          {/* Bottom section with details */}
          <div className="px-4 py-6 pb-24"> {/* Add extra padding at bottom */}
            <DrawerHeader className="mb-5 text-left px-0">
              <div className="flex items-start justify-between mb-2 flex-col gap-2">
                <h2 className="text-xl font-bold text-portfolio-800">{title}</h2>
                <span className="text-xs font-medium bg-portfolio-100 text-portfolio-700 px-2 py-1 rounded-full">Back-End Project</span>
              </div>
              <DrawerDescription className="text-base font-medium text-portfolio-700">
                {caseStudy.headline}
              </DrawerDescription>
            </DrawerHeader>
            
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
                      <span className="text-xs md:text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-2 mt-4 pb-6">
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
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </DrawerContent>
  );
}
