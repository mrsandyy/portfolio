
import { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

  // Don't show custom cursor on mobile
  if (isMobile) return null;

  useEffect(() => {
    // Helper function to check if the element or its parents have cursor:pointer
    const hasPointerCursor = (element: Element | null): boolean => {
      if (!element || element === document.documentElement) {
        return false;
      }
      
      const computedStyle = window.getComputedStyle(element);
      if (computedStyle.cursor === 'pointer') {
        return true;
      }
      
      return hasPointerCursor(element.parentElement);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsPointer(hasPointerCursor(document.elementFromPoint(e.clientX, e.clientY)));
      
      // Show cursor after first movement
      if (!isVisible) {
        setIsVisible(true);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  // Apply styles based on state
  const cursorClasses = `custom-cursor ${isPointer ? 'cursor-hover' : ''} ${isClicking ? 'cursor-click' : ''} ${isVisible ? 'opacity-100' : 'opacity-0'}`;
  
  const ringClasses = `cursor-ring ${isPointer ? 'ring-hover' : ''} ${isClicking ? 'ring-click' : ''} ${isVisible ? 'opacity-100' : 'opacity-0'}`;

  return (
    <>
      <div 
        className={cursorClasses}
        style={{ 
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
      />
      <div 
        className={ringClasses}
        style={{ 
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
      />
    </>
  );
}
