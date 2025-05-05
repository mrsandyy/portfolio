
import { motion } from "framer-motion";
import { MotionButton } from "@/components/ui/button";
import { MobileNavLink } from "./MobileNavLink";

interface MobileNavProps {
  isOpen: boolean;
  navLinks: Array<{ name: string; href: string }>;
  activeSection: string;
  scrollToSection: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export function MobileNav({ isOpen, navLinks, activeSection, scrollToSection }: MobileNavProps) {
  if (!isOpen) return null;
  
  return (
    <motion.nav 
      className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md shadow-lg py-4"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container flex flex-col space-y-4">
        {navLinks.map((link) => (
          <MobileNavLink
            key={link.name}
            name={link.name}
            href={link.href}
            isActive={activeSection === link.href.substring(1)}
            onClick={scrollToSection}
          />
        ))}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <MotionButton 
            className="bg-portfolio-600 hover:bg-portfolio-700 text-white w-full"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Resume
          </MotionButton>
        </motion.div>
      </div>
    </motion.nav>
  );
}
