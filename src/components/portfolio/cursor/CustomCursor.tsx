
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursorType = () => {
      const hoveredElement = document.elementFromPoint(position.x, position.y);
      setIsPointer(
        hoveredElement?.tagName === 'A' || 
        hoveredElement?.tagName === 'BUTTON' || 
        hoveredElement?.closest('a') !== null || 
        hoveredElement?.closest('button') !== null ||
        hoveredElement?.classList.contains('project-card') ||
        hoveredElement?.closest('.project-card') !== null
      );
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousemove', updateCursorType);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Hide the default cursor
    document.documentElement.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousemove', updateCursorType);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      
      // Restore the default cursor
      document.documentElement.style.cursor = 'auto';
    };
  }, [position.x, position.y]);

  return (
    <>
      {/* Main cursor dot */}
      <div 
        className={`fixed z-[9999] pointer-events-none transform -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-100 ${
          isClicking ? 'scale-75' : ''
        } ${
          isPointer ? 'w-5 h-5 bg-portfolio-500/40' : 'w-3 h-3 bg-portfolio-600'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      
      {/* Cursor ring */}
      <div 
        className={`fixed z-[9998] pointer-events-none transform -translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition-all duration-300 ${
          isClicking ? 'scale-90' : ''
        } ${
          isPointer ? 'w-8 h-8 border-portfolio-500' : 'w-8 h-8 border-portfolio-600/30'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
}
