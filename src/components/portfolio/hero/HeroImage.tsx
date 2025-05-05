
import { motion, useReducedMotion } from "framer-motion";

export function HeroImage() {
  // Check if the user prefers reduced motion
  const prefersReducedMotion = useReducedMotion();
  
  // Use minimal animations if reduced motion is preferred
  const animationSettings = {
    // Minimal animations for all users to improve performance
    circle: {
      initial: { scale: 1 },
      animate: { scale: [1, 1.02, 1] },
      transition: { 
        duration: 8, 
        repeat: Infinity, 
        ease: "easeInOut", 
        times: [0, 0.5, 1],
        // Use discrete rather than continuous updates for better performance
        restDelta: 0.01,
      }
    },
    decorativeElements: {
      animate1: { 
        y: [0, -5, 0], 
        x: [0, 5, 0] 
      },
      animate2: { 
        y: [0, 5, 0], 
        x: [0, -5, 0] 
      },
      transition: { 
        duration: 6, 
        repeat: Infinity, 
        ease: "easeInOut", 
        times: [0, 0.5, 1],
        // Use discrete rather than continuous updates for better performance
        restDelta: 0.01,
      }
    },
    rings: {
      animate: { rotate: 360 },
      transition: { 
        duration: 60, // Slower rotation for better performance
        repeat: Infinity, 
        ease: "linear",
        // Use discrete rather than continuous updates for better performance
        restDelta: 0.1,
      }
    }
  };

  // Disable complex animations for reduced motion preference
  if (prefersReducedMotion) {
    animationSettings.circle.animate = { scale: 1 };
    animationSettings.circle.transition = { duration: 0 };
    animationSettings.decorativeElements.animate1 = { y: 0, x: 0 };
    animationSettings.decorativeElements.animate2 = { y: 0, x: 0 };
    animationSettings.decorativeElements.transition = { duration: 0 };
    animationSettings.rings.animate = { rotate: 0 };
    animationSettings.rings.transition = { duration: 0 };
  }

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
          initial={animationSettings.circle.initial}
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
        
        {/* Static gradient overlay instead of animated */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-portfolio-500/20 to-transparent z-10" />
        
        {/* Reduced number of decorative elements */}
        {!prefersReducedMotion && (
          <>
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
          </>
        )}
        
        {/* Simplified outer ring animation - with CSS instead of JS animation when possible */}
        {!prefersReducedMotion ? (
          <motion.div 
            className="absolute w-56 h-56 md:w-72 md:h-72 rounded-full border-2 border-dashed border-portfolio-400/30 z-5"
            animate={animationSettings.rings.animate}
            transition={animationSettings.rings.transition}
          />
        ) : (
          <div className="absolute w-56 h-56 md:w-72 md:h-72 rounded-full border-2 border-dashed border-portfolio-400/30 z-5" />
        )}
      </div>
    </motion.div>
  );
}
