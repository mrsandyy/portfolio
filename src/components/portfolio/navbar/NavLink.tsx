
import { motion } from "framer-motion";
import { CircleCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  name: string;
  href: string;
  isActive: boolean;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export function NavLink({ name, href, isActive, onClick }: NavLinkProps) {
  return (
    <motion.a
      href={href}
      className={cn(
        "relative py-1 font-medium transition-colors group",
        isActive
          ? "text-portfolio-600"
          : "text-foreground/80 hover:text-portfolio-600"
      )}
      onClick={(e) => onClick(e, href)}
      whileHover={{ y: -2 }}
    >
      <span className="relative z-10">{name}</span>
      <span className={cn(
        "absolute bottom-0 left-0 w-full h-0.5 bg-portfolio-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100",
        isActive && "scale-x-100"
      )}></span>
      {isActive && (
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
  );
}
