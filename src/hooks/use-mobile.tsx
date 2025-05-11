
import * as React from "react";

// Define breakpoint constants
const MOBILE_BREAKPOINT = 768;
const TABLET_BREAKPOINT = 1024;

// Create a single useBreakpoint hook that handles all size checks
export function useBreakpoint() {
  // Initialize state with default values
  const [windowWidth, setWindowWidth] = React.useState<number>(0);
  const [isMounted, setIsMounted] = React.useState(false);

  // useEffect will only run on the client
  React.useEffect(() => {
    // Function to update the width
    const updateWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    // Update width immediately and mark component as mounted
    updateWidth();
    setIsMounted(true);
    
    // Add event listener
    window.addEventListener("resize", updateWidth);
    
    // Clean up
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Calculate breakpoint values - only use real values after mounting
  const width = isMounted ? windowWidth : 0;
  const isMobile = width < MOBILE_BREAKPOINT;
  const isTablet = width >= MOBILE_BREAKPOINT && width < TABLET_BREAKPOINT;
  const isDesktop = width >= TABLET_BREAKPOINT;

  return { isMobile, isTablet, isDesktop, isMounted };
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
