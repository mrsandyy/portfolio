
import { useEffect } from "react";

export function useSmoothScroll() {
  useEffect(() => {
    // Function to handle anchor link clicks
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (!link) return;
      
      const href = link.getAttribute('href');
      
      if (!href || !href.startsWith('#')) return;
      
      const targetElement = document.querySelector(href);
      
      if (targetElement) {
        e.preventDefault();
        
        // Get the target's position
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = targetPosition - 100;
        
        // Smooth scroll to the target
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    };
    
    document.addEventListener('click', handleLinkClick);
    
    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);
}
