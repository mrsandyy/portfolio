
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MobileNavLinkProps {
  name: string;
  href: string;
  isActive: boolean;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export function MobileNavLink({ name, href, isActive, onClick }: MobileNavLinkProps) {
  return (
    <motion.a
      href={href}
      className={cn(
        "py-2 font-medium border-l-2 pl-3 transition-colors",
        isActive
          ? "text-portfolio-600 border-portfolio-600"
          : "text-foreground/80 hover:text-portfolio-600 border-transparent"
      )}
      onClick={(e) => onClick(e, href)}
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {name}
    </motion.a>
  );
}
