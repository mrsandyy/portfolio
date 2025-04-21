
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

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

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all duration-300 py-4",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
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
          <Button className="bg-portfolio-600 hover:bg-portfolio-700">
            Resume
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md shadow-lg py-4 animate-fade-in">
          <div className="container flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-portfolio-600 transition-colors font-medium py-2"
                onClick={(e) => scrollToSection(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            <Button className="bg-portfolio-600 hover:bg-portfolio-700 w-full">
              Resume
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
