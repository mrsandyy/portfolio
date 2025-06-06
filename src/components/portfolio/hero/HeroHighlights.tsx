
import { motion } from "framer-motion";
import { useBreakpoint } from "@/hooks/use-mobile";

const highlights = [
  { label: "Experience", value: "2+ yrs", desc: "Professional Engineering" },
  { label: "Systems Built", value: "15+", desc: "Production Projects" },
  { label: "Team Projects", value: "10+", desc: "Collaborative Dev" },
  { label: "Stack", value: "Node, TS, Python", desc: "Modern Technologies" },
];

export function HeroHighlights() {
  // Always call hooks at the top level
  const { isMobile, isMounted } = useBreakpoint();

  // Simplified animations for better performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  // Always compute this value, even if we don't use it in some cases
  const hoverScale = isMounted && !isMobile ? 1.03 : 1;

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 w-full"
    >
      {highlights.map((h) => (
        <motion.div 
          key={h.label} 
          className="flex flex-col items-center justify-between p-3 md:p-4 rounded-xl bg-white border-2 border-portfolio-200 shadow-md hover:shadow-lg transition-all duration-300"
          variants={itemVariants}
          whileHover={{ scale: hoverScale }}
        >
          <span className="text-xs uppercase font-semibold text-portfolio-700 tracking-wide text-center">
            {h.label}
          </span>
          <span className="text-xl sm:text-2xl md:text-3xl font-bold text-portfolio-800 leading-none my-1 text-center">
            {h.value}
          </span>
          <span className="text-xs md:text-sm text-portfolio-600 text-center">
            {h.desc}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}
