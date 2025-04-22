
import { motion } from "framer-motion";

const highlights = [
  { label: "Experience", value: "5+ yrs", desc: "Professional Engineering" },
  { label: "Systems Built", value: "30+", desc: "Production Projects" },
  { label: "Team Projects", value: "10+", desc: "Collaborative Dev" },
  { label: "Stack", value: "Node, TS, SQL", desc: "Modern Technologies" },
];

export function HeroHighlights() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full"
    >
      {highlights.map((h, idx) => (
        <motion.div 
          key={h.label} 
          className="flex flex-col items-center p-4 rounded-xl bg-white border-2 border-portfolio-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
        >
          <span className="text-xs uppercase font-semibold text-portfolio-700 tracking-wide">{h.label}</span>
          <span className="text-3xl font-bold text-portfolio-800 leading-tight">{h.value}</span>
          <span className="text-xs text-portfolio-600 text-center">{h.desc}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}
