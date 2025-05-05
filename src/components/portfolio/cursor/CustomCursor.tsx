
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
        className="fixed z-[9999] pointer-events-none w-3 h-3 bg-portfolio-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.75 : 1})`,
          backgroundColor: isPointer ? 'rgba(107, 132, 243, 0.4)' : '#6b84f3',
          width: isPointer ? '20px' : '12px',
          height: isPointer ? '20px' : '12px',
        }}
      />
      
      {/* Cursor ring - fixed positioning with explicit styles */}
      <div 
        className="fixed z-[9998] pointer-events-none rounded-full border-2 transition-all duration-300"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.9 : 1})`,
          width: isPointer ? '32px' : '32px',
          height: isPointer ? '32px' : '32px',
          borderColor: isPointer ? 'rgba(107, 132, 243, 0.8)' : 'rgba(107, 132, 243, 0.3)',
          borderWidth: '2px',
        }}
      />
    </>
  );
}
