
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, CircleCheck } from "lucide-react";
import { motion } from "framer-motion";

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
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className={cn(
                "relative py-1 font-medium transition-colors group",
                activeSection === link.href.substring(1)
                  ? "text-portfolio-600"
                  : "text-foreground/80 hover:text-portfolio-600"
              )}
              onClick={(e) => scrollToSection(e, link.href)}
              variants={itemVariants}
              whileHover={{ y: -2 }}
            >
              <span className="relative z-10">{link.name}</span>
              <span className={cn(
                "absolute bottom-0 left-0 w-full h-0.5 bg-portfolio-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100",
                activeSection === link.href.substring(1) && "scale-x-100"
              )}></span>
              {activeSection === link.href.substring(1) && (
                <motion.span
                  className="absolute -right-5 top-1"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <CircleCheck size={14} className="text-portfolio-500" />
                </motion.span>
              )}
            </motion.a>
          ))}
          <motion.div variants={itemVariants}>
            <Button 
              className="bg-portfolio-600 hover:bg-portfolio-700 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </Button>
          </motion.div>
        </nav>

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
      {mobileMenuOpen && (
        <motion.nav 
          className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md shadow-lg py-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container flex flex-col space-y-4">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className={cn(
                  "py-2 font-medium border-l-2 pl-3 transition-colors",
                  activeSection === link.href.substring(1)
                    ? "text-portfolio-600 border-portfolio-600"
                    : "text-foreground/80 hover:text-portfolio-600 border-transparent"
                )}
                onClick={(e) => scrollToSection(e, link.href)}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <Button className="bg-portfolio-600 hover:bg-portfolio-700 w-full">
                Resume
              </Button>
            </motion.div>
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
}
