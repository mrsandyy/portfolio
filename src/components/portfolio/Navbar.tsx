
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
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

  // Navbar animation variants
  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Mobile menu animation variants
  const menuVariants = {
    closed: { 
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
        ease: "easeInOut"
      }
    },
    open: { 
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.05,
        delayChildren: 0.1,
        ease: "easeOut"
      }
    }
  };

  const menuItemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 }
  };

  const navbarBg = isScrolled
    ? "bg-background/80 backdrop-blur-md shadow-sm"
    : "bg-transparent";

  return (
    <motion.header
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      className={cn(
        "fixed w-full z-50 transition-all duration-300 py-4",
        navbarBg
      )}
    >
      <div className="container flex items-center justify-between">
        <a 
          href="#home" 
          className="text-2xl font-heading font-bold text-portfolio-700 hover:text-portfolio-600 transition-colors"
          onClick={(e) => scrollToSection(e, "#home")}
        >
          Portfolio
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-foreground/80 hover:text-portfolio-600 transition-colors font-medium"
              onClick={(e) => scrollToSection(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-portfolio-600 hover:bg-portfolio-700">
              Resume
            </Button>
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "md:hidden",
            isScrolled 
              ? "hover:bg-background/90 text-portfolio-700" 
              : "hover:bg-white/20 text-portfolio-700"
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav 
            className={cn(
              "md:hidden absolute top-full left-0 w-full overflow-hidden",
              isScrolled 
                ? "bg-background/95 backdrop-blur-md shadow-lg"
                : "bg-white/95 backdrop-blur-md shadow-lg"
            )}
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="container flex flex-col space-y-4 py-4">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-foreground/80 hover:text-portfolio-600 transition-colors font-medium py-2"
                  onClick={(e) => scrollToSection(e, link.href)}
                  variants={menuItemVariants}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div variants={menuItemVariants}>
                <Button className="bg-portfolio-600 hover:bg-portfolio-700 w-full">
                  Resume
                </Button>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
