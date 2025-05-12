
import { useState, useEffect } from "react";

export function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading time and then hide loader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (!isLoading) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="flex flex-col items-center">
        <div className="space-y-2">
          <div className="flex space-x-2">
            <div className="h-3 w-3 animate-bounce rounded-full bg-portfolio-600" style={{ animationDelay: '0ms' }}></div>
            <div className="h-3 w-3 animate-bounce rounded-full bg-portfolio-600" style={{ animationDelay: '150ms' }}></div>
            <div className="h-3 w-3 animate-bounce rounded-full bg-portfolio-600" style={{ animationDelay: '300ms' }}></div>
          </div>
          <p className="text-sm font-medium text-portfolio-600 animate-pulse">Loading</p>
        </div>
      </div>
    </div>
  );
}
