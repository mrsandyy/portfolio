import React, { useMemo } from "react";
import { Dialog, DialogContent, DialogHeader, DialogDescription } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerHeader, DrawerDescription } from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Github, ExternalLink, Database, Server, Cpu, Code, Terminal, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useBreakpoint } from "@/hooks/use-mobile";
import { ProjectInfo } from "./CaseStudyModal/ProjectInfo";
import { CaseStudyContent } from "./CaseStudyModal/CaseStudyContent";

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
  const { isMobile } = useBreakpoint();

  // Memoize animations to prevent recreating on every render
  const animations = useMemo(() => ({
    fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
    },
    stagger: {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
    }
  }), []);
  
  if (!project) return null;
  
  const { title, description, image, demoLink, repoLink, caseStudy, tags } = project;

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={onOpenChange}>
        <DrawerContent className="px-0 py-0 overflow-hidden rounded-t-xl max-h-[85vh]">
          <ScrollArea className="max-h-[85vh] h-[85vh] overflow-y-auto">
            <div className="flex flex-col">
              <ProjectInfo
                title={title}
                description={description}
                image={image}
                demoLink={demoLink}
                repoLink={repoLink}
                caseStudy={caseStudy}
                animations={animations}
              />
              
              <div className="px-4 py-6 pb-24">
                <DrawerHeader className="mb-5 text-left px-0">
                  <div className="flex items-start justify-between mb-2 flex-col gap-2">
                    <h2 className="text-xl font-bold text-portfolio-800">{title}</h2>
                    <span className="text-xs font-medium bg-portfolio-100 text-portfolio-700 px-2 py-1 rounded-full">Back-End Project</span>
                  </div>
                  <DrawerDescription className="text-base font-medium text-portfolio-700">
                    {caseStudy.headline}
                  </DrawerDescription>
                </DrawerHeader>
                
                <CaseStudyContent
                  title={title}
                  caseStudy={caseStudy}
                  animations={animations}
                />
              </div>
            </div>
          </ScrollArea>
        </DrawerContent>
      </Drawer>
    );
  } 

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden rounded-xl bg-gradient-to-br from-portfolio-50 via-white to-portfolio-50">
        <div className="grid md:grid-cols-5 gap-0">
          <ProjectInfo
            title={title}
            description={description}
            image={image}
            demoLink={demoLink}
            repoLink={repoLink}
            caseStudy={caseStudy}
            animations={animations}
          />
          
          <div className="md:col-span-3 px-5 py-6 md:px-7 md:py-8">
            <DialogHeader className="mb-5 md:mb-6">
              <div className="flex items-start md:items-center justify-between mb-2 flex-col md:flex-row gap-2 md:gap-0">
                <DialogHeader className="p-0 space-y-0">
                  <h2 className="text-xl md:text-2xl font-bold text-portfolio-800">{title}</h2>
                </DialogHeader>
                  <span className="text-xs font-medium bg-portfolio-100 text-portfolio-700 px-2 py-1 rounded-full">Back-End Project</span>
                </div>
              <DialogDescription className="text-base md:text-lg font-medium text-portfolio-700">
                  {caseStudy.headline}
                </DialogDescription>
            </DialogHeader>
            
            <CaseStudyContent
              title={title}
              caseStudy={caseStudy}
              animations={animations}
            />
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
