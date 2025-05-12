import { motion } from "framer-motion";
import { Code, Server, CheckCircle } from "lucide-react";

interface CaseStudyContentProps {
  title: string;
  caseStudy: {
    headline: string;
    challenges: string;
    backendHighlights: string[];
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

export function CaseStudyContent({ title, caseStudy, animations }: CaseStudyContentProps) {
  return (
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
  );
} 