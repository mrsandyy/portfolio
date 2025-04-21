
import { useEffect, useState } from "react";
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

const Index = () => {
  // Use the smooth scroll hook
  useSmoothScroll();
  
  // Add smooth scrolling behavior for the entire site
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Loader />
      <Navbar />
      <Hero />
      
      <ScrollRevealWrapper>
        <About />
      </ScrollRevealWrapper>
      
      <ScrollRevealWrapper>
        <Projects />
      </ScrollRevealWrapper>
      
      <ScrollRevealWrapper>
        <Experience />
      </ScrollRevealWrapper>
      
      <ScrollRevealWrapper>
        <Contact />
      </ScrollRevealWrapper>
      
      <Footer />
    </div>
  );
};

export default Index;
