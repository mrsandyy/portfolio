
import React from "react";
import { Dialog } from "@/components/ui/dialog";
import { Drawer } from "@/components/ui/drawer";
import { useBreakpoint } from "@/hooks/use-mobile";
import { CaseStudyMobileDrawer } from "./CaseStudyMobileDrawer";
import { CaseStudyDesktopDialog } from "./CaseStudyDesktopDialog";
import { ProjectType } from "./types";

interface CaseStudyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: ProjectType | null;
}

export function CaseStudyModal({ open, onOpenChange, project }: CaseStudyModalProps) {
  // Always call hooks at the top level
  const { isMobile } = useBreakpoint();
  
  // Create animations once to avoid recreating on every render
  const animations = React.useMemo(() => ({
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
  
  // Handle the case when no project is available
  // Instead of an early return, we'll render null conditionally
  const renderContent = () => {
    if (!project) {
      return null;
    }
    
    if (isMobile) {
      return (
        <Drawer open={open} onOpenChange={onOpenChange}>
          <CaseStudyMobileDrawer project={project} />
        </Drawer>
      );
    } 
    
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <CaseStudyDesktopDialog 
          project={project} 
          animations={animations}
        />
      </Dialog>
    );
  };
  
  // This ensures that hooks are always called in the same order
  return renderContent();
}
