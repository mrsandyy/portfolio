
import React from "react";
import { motion } from "framer-motion";
import { Database, Server, Cpu, Terminal } from "lucide-react";
import { HeroImage } from "./hero/HeroImage";
import { HeroActions } from "./hero/HeroActions";
import { HeroHighlights } from "./hero/HeroHighlights";

const coreSkills = [
  { label: "Node.js", icon: <Server className="h-5 w-5 text-portfolio-700" /> },
  { label: "TypeScript", icon: <Terminal className="h-5 w-5 text-portfolio-700" /> },
  { label: "SQL / MongoDB", icon: <Database className="h-5 w-5 text-portfolio-700" /> },
  { label: "API Design", icon: <Cpu className="h-5 w-5 text-portfolio-700" /> },
  { label: "Testing (Jest)", icon: <Terminal className="h-5 w-5 text-portfolio-700" /> },
  { label: "Cloud/Deploy", icon: <Server className="h-5 w-5 text-portfolio-700" /> },
];

export function Hero() {
  return (
    <section id="home" className="min-h-screen pt-24 pb-20 bg-gradient-to-br from-portfolio-50 to-white relative overflow-hidden">
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row gap-12 md:gap-6 items-center justify-between">
          {/* Mobile: Image first, then content */}
          <div className="flex flex-col items-center md:items-start flex-1 order-2 md:order-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-3 flex items-center gap-3"
            >
              <span className="block px-3 py-1 rounded-lg font-bold text-white bg-portfolio-700 shadow-md text-sm tracking-wide">
                Back-End Engineer
              </span>
              <span className="block px-3 py-1 rounded-lg bg-portfolio-200 text-portfolio-700 font-semibold shadow-sm">
                Available Now
              </span>
            </motion.div>
            
            <motion.h1 
              className="font-bold text-4xl sm:text-5xl text-portfolio-800 mb-4 text-center md:text-left leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Sandeep Vishnoi
              <div className="text-gradient bg-gradient-to-r from-portfolio-700 via-blue-500 to-purple-500 bg-clip-text text-transparent pb-1">
                Backend Engineer
              </div>
            </motion.h1>
            
            <motion.p
              className="text-lg text-portfolio-600 mb-6 text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Scaling systems and building resilient APIs that power modern applications
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-3 mt-5 mb-8 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, staggerChildren: 0.1 }}
            >
              {coreSkills.map((skill, index) => (
                <motion.span 
                  key={skill.label} 
                  className="flex items-center gap-2 bg-portfolio-200/80 text-portfolio-900 px-3 py-1 rounded-lg font-semibold shadow-sm text-sm hover:bg-portfolio-300 hover:-translate-y-1 border border-portfolio-100 transition-all"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill.icon} {skill.label}
                </motion.span>
              ))}
            </motion.div>
            
            <HeroActions />
          </div>
          
          {/* Mobile: Image at the top */}
          <div className="flex-1 flex flex-col items-center order-1 md:order-2">
            <HeroImage />
          </div>
        </div>

        {/* Highlights at the bottom for both mobile and desktop */}
        <div className="mt-16 md:mt-20">
          <HeroHighlights />
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-portfolio-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
    </section>
  );
}
