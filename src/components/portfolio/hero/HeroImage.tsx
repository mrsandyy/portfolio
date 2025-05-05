
import { motion, useReducedMotion } from "framer-motion";

export function HeroImage() {
  // Check if the user prefers reduced motion
  const prefersReducedMotion = useReducedMotion();
  
  // Use simplified animations if reduced motion is preferred
  const animationSettings = prefersReducedMotion ? {
    // Minimal animations for reduced motion preference
    circle: {
      animate: { scale: 1 },
      transition: { duration: 0 }
    },
    decorativeElements: {
      animate: { y: 0, x: 0 },
      transition: { duration: 0 }
    },
    rings: {
      animate: { rotate: 0, scale: 1 },
      transition: { duration: 0 }
    }
  } : {
    // Full animations
    circle: {
      animate: { scale: [1, 1.02, 1] },
      transition: { duration: 8, repeat: Infinity, ease: "easeInOut", times: [0, 0.5, 1] }
    },
    decorativeElements: {
      animate1: { y: [0, -5, 0], x: [0, 5, 0] },
      animate2: { y: [0, 5, 0], x: [0, -5, 0] },
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut", times: [0, 0.5, 1] }
    },
    rings: {
      animate: { rotate: 360 },
      transition: { duration: 40, repeat: Infinity, ease: "linear" }
    }
  };

  return (
    <motion.div 
      className="relative mb-6 md:mb-10 w-full max-w-md mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <div className="relative flex items-center justify-center">
        {/* Simplified animated background circle */}
        <motion.div 
          className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-portfolio-300/30 to-blue-300/30"
          animate={animationSettings.circle.animate}
          transition={animationSettings.circle.transition}
        />
        
        {/* Main image */}
        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl z-10">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Sandeep Vishnoi"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        
        {/* Simplified gradient overlay */}
        <div 
          className="absolute inset-0 rounded-full bg-gradient-to-br from-portfolio-500/20 to-transparent z-10"
        />
        
        {/* Decorative elements with optimized animations */}
        <motion.div 
          className="absolute bottom-0 right-0 w-10 h-10 bg-portfolio-500 rounded-full z-10"
          animate={animationSettings.decorativeElements.animate1}
          transition={animationSettings.decorativeElements.transition}
        />
        
        <motion.div 
          className="absolute top-0 left-0 w-6 h-6 bg-portfolio-700 rounded-full z-10"
          animate={animationSettings.decorativeElements.animate2}
          transition={animationSettings.decorativeElements.transition}
        />
        
        {/* Simplified outer ring animation - visible on both mobile and desktop */}
        <motion.div 
          className="absolute w-56 h-56 md:w-72 md:h-72 rounded-full border-2 border-dashed border-portfolio-400/30 z-5"
          animate={animationSettings.rings.animate}
          transition={animationSettings.rings.transition}
        />
      </div>
    </motion.div>
  );
}
