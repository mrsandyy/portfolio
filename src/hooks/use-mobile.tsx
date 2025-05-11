
import * as React from "react";

// Define breakpoint constants
const MOBILE_BREAKPOINT = 768;
const TABLET_BREAKPOINT = 1024;

// Create a single useBreakpoint hook that handles all size checks
export function useBreakpoint() {
  // Always initialize these state variables regardless of environment
  const [windowWidth, setWindowWidth] = React.useState<number>(0);
  const [mounted, setMounted] = React.useState(false);

  // useEffect will only run on the client
  React.useEffect(() => {
    // Update width immediately and mark component as mounted
    setWindowWidth(window.innerWidth);
    setMounted(true);
    
    // Handle resize events
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    // Add event listener
    window.addEventListener("resize", handleResize);
    
    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Always calculate these values (but use mounted flag to determine if they should be "real")
  const isMobile = mounted && windowWidth < MOBILE_BREAKPOINT;
  const isTablet = mounted && windowWidth >= MOBILE_BREAKPOINT && windowWidth < TABLET_BREAKPOINT;
  const isDesktop = mounted && windowWidth >= TABLET_BREAKPOINT;

  return { isMobile, isTablet, isDesktop };
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
