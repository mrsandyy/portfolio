
import * as React from "react";

// Define breakpoint constants
const MOBILE_BREAKPOINT = 768;
const TABLET_BREAKPOINT = 1024;

// Create a single useBreakpoint hook that handles all size checks
export function useBreakpoint() {
  // Initialize with consistent state values
  const [windowWidth, setWindowWidth] = React.useState(0);
  const [isMounted, setIsMounted] = React.useState(false);

  // useEffect will only run on the client
  React.useEffect(() => {
    // Mark as mounted immediately
    setIsMounted(true);
    
    // Function to update window width
    const updateWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width
    updateWidth();
    
    // Add resize event listener
    window.addEventListener("resize", updateWidth);
    
    // Clean up on unmount
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  // Always calculate these values regardless of mounted state
  // This ensures consistent hook calls between renders
  const width = isMounted ? windowWidth : 0;
  const isMobile = width < MOBILE_BREAKPOINT;
  const isTablet = width >= MOBILE_BREAKPOINT && width < TABLET_BREAKPOINT;
  const isDesktop = width >= TABLET_BREAKPOINT;

  return { 
    isMobile, 
    isTablet, 
    isDesktop, 
    isMounted,
    width 
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
