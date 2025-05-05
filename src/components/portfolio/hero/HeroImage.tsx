
import { motion } from "framer-motion";

export function HeroImage() {
  return (
    <motion.div 
      className="relative mb-6 md:mb-10 w-full max-w-md mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <div className="relative">
        {/* Animated background circle */}
        <motion.div 
          className="absolute inset-0 w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full bg-gradient-to-br from-portfolio-300/30 to-blue-300/30"
          animate={{ 
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <div className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl">
          <motion.img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Sandeep Vishnoi"
            className="w-full h-full object-cover"
            loading="eager"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
        </div>
        <motion.div 
          className="absolute inset-0 rounded-full bg-gradient-to-br from-portfolio-500/20 to-transparent"
          animate={{ 
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut"
          }}
        />
        
        {/* Add decorative elements - visible on both mobile and desktop */}
        <motion.div 
          className="absolute -bottom-2 -right-2 w-10 h-10 bg-portfolio-500 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div 
          className="absolute -top-2 -left-2 w-6 h-6 bg-portfolio-700 rounded-full"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Additional outer ring animation */}
        <motion.div 
          className="absolute -inset-4 rounded-full border-2 border-dashed border-portfolio-400/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </motion.div>
  );
}
