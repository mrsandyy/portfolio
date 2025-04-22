
import React, { useEffect } from "react";
import { ScrollRevealWrapper } from "@/components/portfolio/ScrollRevealWrapper";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Loader } from "@/components/portfolio/Loader";
import { motion } from "framer-motion";

const Index = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    
    // Create and add custom cursor
    const cursor = document.createElement("div");
    cursor.classList.add("cursor-follower");
    document.body.appendChild(cursor);

    const handleMouseMove = (e: MouseEvent) => {
      // Use requestAnimationFrame for smoother cursor movement
      requestAnimationFrame(() => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      document.documentElement.style.scrollBehavior = "";
      document.removeEventListener("mousemove", handleMouseMove);
      if (document.body.contains(cursor)) {
        document.body.removeChild(cursor);
      }
    };
  }, []);

  // Use the smooth scroll hook
  useSmoothScroll();
  
  return (
    <motion.div 
      className="min-h-screen bg-background text-foreground overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Loader />
      <Navbar />
      <Hero />
      
      <ScrollRevealWrapper threshold={0.1}>
        <About />
      </ScrollRevealWrapper>
      
      <ScrollRevealWrapper threshold={0.1}>
        <Projects />
      </ScrollRevealWrapper>
      
      <ScrollRevealWrapper threshold={0.1}>
        <Experience />
      </ScrollRevealWrapper>
      
      <ScrollRevealWrapper threshold={0.1}>
        <Contact />
      </ScrollRevealWrapper>
      
      <Footer />
    </motion.div>
  );
};

export default Index;
