
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
        <div className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Sandeep Vishnoi"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-portfolio-500/20 to-transparent"></div>
      </div>
    </motion.div>
  );
}
