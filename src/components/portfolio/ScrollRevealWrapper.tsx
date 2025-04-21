
import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  threshold?: number;
  delay?: number;
  className?: string;
}

export function ScrollRevealWrapper({ 
  children, 
  threshold = 0.1,
  delay = 0,
  className = "" 
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("animate-reveal");
            entry.target.classList.remove("opacity-0", "translate-y-10");
            observer.unobserve(entry.target);
          }, delay);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px"
      }
    );
    
    const currentRef = ref.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, delay]);
  
  return (
    <div 
      ref={ref} 
      className={`opacity-0 translate-y-10 transition-all duration-700 ${className}`}
    >
      {children}
    </div>
  );
}
