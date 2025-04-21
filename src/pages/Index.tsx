
import { useEffect } from "react";
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
  // Use the smooth scroll hook
  useSmoothScroll();
  
  // Add smooth scrolling behavior for the entire site
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    
    // Initialize cursor follower effect
    const cursorFollower = document.createElement("div");
    cursorFollower.classList.add("cursor-follower");
    document.body.appendChild(cursorFollower);

    const handleMouseMove = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        cursorFollower.style.left = `${e.clientX}px`;
        cursorFollower.style.top = `${e.clientY}px`;
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      document.documentElement.style.scrollBehavior = "";
      document.removeEventListener("mousemove", handleMouseMove);
      if (document.body.contains(cursorFollower)) {
        document.body.removeChild(cursorFollower);
      }
    };
  }, []);

  const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 }
  };

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
