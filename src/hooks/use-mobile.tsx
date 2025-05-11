
import * as React from "react";

// Define breakpoint constants
const MOBILE_BREAKPOINT = 768;
const TABLET_BREAKPOINT = 1024;

// Create a single useBreakpoint hook that handles all size checks
export function useBreakpoint() {
  const [windowWidth, setWindowWidth] = React.useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  React.useEffect(() => {
    // Skip effect during SSR
    if (typeof window === 'undefined') return;
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    // Initial check
    handleResize();
    
    // Add event listener
    window.addEventListener("resize", handleResize);
    
    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    isMobile: windowWidth < MOBILE_BREAKPOINT,
    isTablet: windowWidth >= MOBILE_BREAKPOINT && windowWidth < TABLET_BREAKPOINT,
    isDesktop: windowWidth >= TABLET_BREAKPOINT
  };
}

// Maintain backward compatibility with existing code
export function useIsMobile() {
  const { isMobile } = useBreakpoint();
  return isMobile;
}

export function useIsTablet() {
  const { isTablet } = useBreakpoint();
  return isTablet;
}

export function useDeviceType() {
  const { isMobile, isTablet, isDesktop } = useBreakpoint();
  return { isMobile, isTablet, isDesktop };
}
