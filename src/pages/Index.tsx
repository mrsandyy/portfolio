
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

    // Create outer ring for enhanced visual effect
    const cursorRing = document.createElement("div");
    cursorRing.classList.add("cursor-ring");
    document.body.appendChild(cursorRing);

    let currentX = 0;
    let currentY = 0;
    let ringX = 0;
    let ringY = 0;
    let raf: number;

    // More advanced lerp function with adjustable speed
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const updateCursor = () => {
      // Main cursor follows with medium speed
      currentX = lerp(currentX, mouseX, 0.2);
      currentY = lerp(currentY, mouseY, 0.2);
      
      // Ring follows with slightly slower speed for trailing effect
      ringX = lerp(ringX, mouseX, 0.15);
      ringY = lerp(ringY, mouseY, 0.15);
      
      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      cursorRing.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      
      raf = requestAnimationFrame(updateCursor);
    };

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Function to handle element hover state
    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.tagName === 'A' || 
          target.tagName === 'BUTTON' || 
          target.hasAttribute('role') && target.getAttribute('role') === 'button' ||
          target.classList.contains('project-card') ||
          target.closest('.project-card') ||
          target.closest('button') ||
          target.closest('a')) {
        
        cursor.classList.add('cursor-hover');
        cursorRing.classList.add('cursor-ring-hover');
      }
    };

    // Function to handle element mouse leave
    const handleMouseLeave = () => {
      cursor.classList.remove('cursor-hover');
      cursorRing.classList.remove('cursor-ring-hover');
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseEnter);
    document.addEventListener("mouseout", handleMouseLeave);
    
    // Add specific handling for click animation
    document.addEventListener("mousedown", () => {
      cursor.classList.add('cursor-click');
      cursorRing.classList.add('cursor-ring-click');
    });
    
    document.addEventListener("mouseup", () => {
      cursor.classList.remove('cursor-click');
      cursorRing.classList.remove('cursor-ring-click');
    });
    
    raf = requestAnimationFrame(updateCursor);
    
    return () => {
      document.documentElement.style.scrollBehavior = "";
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);
      document.removeEventListener("mousedown", () => {});
      document.removeEventListener("mouseup", () => {});
      cancelAnimationFrame(raf);
      if (document.body.contains(cursor)) {
        document.body.removeChild(cursor);
      }
      if (document.body.contains(cursorRing)) {
        document.body.removeChild(cursorRing);
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
