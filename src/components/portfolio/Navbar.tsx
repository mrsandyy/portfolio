
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { DesktopNav } from "./navbar/DesktopNav";
import { MobileNav } from "./navbar/MobileNav";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Determine active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      const sectionPositions = sections.map(id => {
        const element = document.getElementById(id);
        return element ? element.offsetTop - 150 : 0;
      });
      
      const currentPosition = window.scrollY + 150;
      
      for (let i = sectionPositions.length - 1; i >= 0; i--) {
        if (currentPosition >= sectionPositions[i]) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      setMobileMenuOpen(false);
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 100,
        behavior: "smooth",
      });
    }
  };

  // Animation variants
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={cn(
        "fixed w-full z-50 transition-all duration-300 py-4",
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <motion.a 
          href="#home" 
          className="text-2xl font-heading font-bold text-portfolio-700 hover:text-portfolio-600 transition-colors relative group"
          onClick={(e) => scrollToSection(e, "#home")}
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          Portfolio
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-portfolio-500 group-hover:w-full transition-all duration-300"></span>
        </motion.a>

        {/* Desktop Navigation */}
        <DesktopNav 
          navLinks={navLinks} 
          activeSection={activeSection} 
          scrollToSection={scrollToSection} 
        />

        {/* Mobile Menu Button */}
        <motion.div variants={itemVariants}>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-portfolio-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </motion.div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={mobileMenuOpen}
        navLinks={navLinks}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
    </motion.header>
  );
}
