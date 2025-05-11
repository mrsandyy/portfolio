
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const highlights = [
  { label: "Experience", value: "5+ yrs", desc: "Professional Engineering" },
  { label: "Systems Built", value: "30+", desc: "Production Projects" },
  { label: "Team Projects", value: "10+", desc: "Collaborative Dev" },
  { label: "Stack", value: "Node, TS, SQL", desc: "Modern Technologies" },
];

export function HeroHighlights() {
  const isMobile = useIsMobile();

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
          className="flex flex-col items-center p-3 md:p-4 rounded-xl bg-white border-2 border-portfolio-200 shadow-md hover:shadow-lg transition-all duration-300"
          variants={itemVariants}
          whileHover={{ scale: isMobile ? 1 : 1.03 }}
        >
          <span className="text-xs uppercase font-semibold text-portfolio-700 tracking-wide">{h.label}</span>
          <span className="text-2xl md:text-3xl font-bold text-portfolio-800 leading-tight">{h.value}</span>
          <span className="text-xs text-portfolio-600 text-center">{h.desc}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}
