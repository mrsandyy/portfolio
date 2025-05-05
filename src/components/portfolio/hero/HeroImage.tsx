
import { motion } from "framer-motion";

export function HeroImage() {
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
          animate={{ 
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.5, 1]
          }}
        />
        
        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl z-10">
          <motion.img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Sandeep Vishnoi"
            className="w-full h-full object-cover"
            loading="eager"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
        </div>
        
        {/* Simplified gradient overlay */}
        <motion.div 
          className="absolute inset-0 rounded-full bg-gradient-to-br from-portfolio-500/20 to-transparent z-10"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.5, 0.7, 0.5] }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut",
            times: [0, 0.5, 1]
          }}
        />
        
        {/* Add decorative elements with improved animations */}
        <motion.div 
          className="absolute bottom-0 right-0 w-10 h-10 bg-portfolio-500 rounded-full z-10"
          animate={{ 
            y: [0, -10, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut", 
            times: [0, 0.5, 1]
          }}
        />
        
        <motion.div 
          className="absolute top-0 left-0 w-6 h-6 bg-portfolio-700 rounded-full z-10"
          animate={{ 
            y: [0, 10, 0],
            x: [0, -10, 0]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity, 
            ease: "easeInOut",
            times: [0, 0.5, 1]
          }}
        />
        
        {/* Simplified outer ring animation */}
        <motion.div 
          className="absolute w-56 h-56 md:w-72 md:h-72 rounded-full border-2 border-dashed border-portfolio-400/30 z-5"
          animate={{ rotate: 360 }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear"
          }}
        />
        
        {/* Add a second outer ring for more visual interest */}
        <motion.div 
          className="absolute w-52 h-52 md:w-68 md:h-68 rounded-full border border-portfolio-300/40 z-5"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut",
            times: [0, 0.5, 1]
          }}
        />
      </div>
    </motion.div>
  );
}
