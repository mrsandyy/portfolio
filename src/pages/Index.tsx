
import React, { useEffect, useRef } from "react";
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
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const cursorRingRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    
    // Create cursor elements
    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);
    cursorRef.current = cursor;

    const cursorRing = document.createElement("div");
    cursorRing.classList.add("cursor-ring");
    document.body.appendChild(cursorRing);
    cursorRingRef.current = cursorRing;

    // Set initial positions off-screen
    cursor.style.transform = `translate(-100px, -100px)`;
    cursorRing.style.transform = `translate(-100px, -100px)`;

    // Track mouse position with requestAnimationFrame for smoother performance
    let mouseX = -100;
    let mouseY = -100;
    let cursorX = -100;
    let cursorY = -100;
    let ringX = -100;
    let ringY = -100;

    const updateCursor = () => {
      // Apply easing for smooth movement
      cursorX = lerp(cursorX, mouseX, 0.2);
      cursorY = lerp(cursorY, mouseY, 0.2);
      
      ringX = lerp(ringX, mouseX, 0.15); // Slightly slower to create trailing effect
      ringY = lerp(ringY, mouseY, 0.15);
      
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
      }
      
      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      
      requestAnimationFrame(updateCursor);
    };

    // Linear interpolation function for smooth movement
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Handle element hover states
    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.tagName === 'A' || 
          target.tagName === 'BUTTON' || 
          target.hasAttribute('role') && target.getAttribute('role') === 'button' ||
          target.classList.contains('project-card') ||
          target.closest('.project-card') ||
          target.closest('button') ||
          target.closest('a')) {
        
        if (cursorRef.current) cursorRef.current.classList.add('cursor-hover');
        if (cursorRingRef.current) cursorRingRef.current.classList.add('ring-hover');
      }
    };

    // Handle element mouse leave
    const handleMouseLeave = () => {
      if (cursorRef.current) cursorRef.current.classList.remove('cursor-hover');
      if (cursorRingRef.current) cursorRingRef.current.classList.remove('ring-hover');
    };

    // Handle mouse click animations
    const handleMouseDown = () => {
      if (cursorRef.current) cursorRef.current.classList.add('cursor-click');
      if (cursorRingRef.current) cursorRingRef.current.classList.add('ring-click');
    };
    
    const handleMouseUp = () => {
      if (cursorRef.current) cursorRef.current.classList.remove('cursor-click');
      if (cursorRingRef.current) cursorRingRef.current.classList.remove('ring-click');
    };

    // Set up event listeners
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseEnter);
    document.addEventListener("mouseout", handleMouseLeave);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    
    // Start animation loop
    requestAnimationFrame(updateCursor);
    
    return () => {
      // Clean up on component unmount
      document.documentElement.style.scrollBehavior = "";
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      
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
