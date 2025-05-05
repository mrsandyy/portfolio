
import { motion } from "framer-motion";
import { MotionButton } from "@/components/ui/button";
import { NavLink } from "./NavLink";

interface DesktopNavProps {
  navLinks: Array<{ name: string; href: string }>;
  activeSection: string;
  scrollToSection: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export function DesktopNav({ navLinks, activeSection, scrollToSection }: DesktopNavProps) {
  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navLinks.map((link) => (
        <motion.div key={link.name} variants={itemVariants}>
          <NavLink
            name={link.name}
            href={link.href}
            isActive={activeSection === link.href.substring(1)}
            onClick={scrollToSection}
          />
        </motion.div>
      ))}
      <motion.div variants={itemVariants}>
        <MotionButton 
          className="bg-portfolio-600 hover:bg-portfolio-700 text-white shadow-md hover:shadow-lg transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Resume
        </MotionButton>
      </motion.div>
    </nav>
  );
}
