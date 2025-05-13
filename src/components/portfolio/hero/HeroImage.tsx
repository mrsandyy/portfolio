
import { motion } from "framer-motion";
import { useBreakpoint } from "@/hooks/use-mobile";

export function HeroImage() {
  // Use the more reliable useBreakpoint hook
  const { isMobile } = useBreakpoint();

  // Optimized animations with better timing and smoother transitions
  const decorationVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      opacity: [0.4, 0.6, 0.4],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: [0.4, 0, 0.6, 1],
        times: [0, 0.5, 1]
      }
    },
    float: {
      y: [0, -10, 0],
      x: [0, 3, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: [0.4, 0, 0.6, 1],
        times: [0, 0.5, 1]
      }
    }
  };

  return (
    <motion.div 
      className="relative w-full max-w-md mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <div className="relative">
        <div className="w-48 h-48 md:w-72 md:h-72 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl">
          <img 
            src="MrSandy-4.jpg"
            alt="Sandeep Vishnoi"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-portfolio-500/20 to-transparent"></div>
        
        {/* Minimal decorative elements */}
        <motion.div 
          className="absolute -bottom-2 -right-2 w-10 h-10 bg-portfolio-500/30 rounded-full"
          style={{ 
            opacity: isMobile ? 0 : 1,
            filter: "blur(1px)",
            mixBlendMode: "multiply"
          }}
          variants={decorationVariants}
          animate="pulse"
        />
        <motion.div 
          className="absolute -top-2 -left-2 w-6 h-6 bg-portfolio-700/30 rounded-full"
          style={{ 
            opacity: isMobile ? 0 : 1,
            filter: "blur(1px)",
            mixBlendMode: "multiply"
          }}
          variants={decorationVariants}
          animate="float"
        />
      </div>
    </motion.div>
  );
}
