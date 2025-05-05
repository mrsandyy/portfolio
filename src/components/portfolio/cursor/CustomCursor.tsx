import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      setPosition({ x, y });

      const el = document.elementFromPoint(x, y);
      const hoveringInteractive =
        (el?.tagName === "A" || el?.tagName === "BUTTON") ||
        !!el?.closest("a, button") ||
        el?.classList.contains("project-card") ||
        !!el?.closest(".project-card");

      setIsPointer(hoveringInteractive);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.documentElement.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.documentElement.style.cursor = "auto";
    };
  }, []);

  const { x, y } = position;

  // Separate inline styles for inner and outer circles
  const innerStyle: React.CSSProperties = {
    left: `${x}px`,
    top: `${y}px`,
    transition: isClicking
      ? "left 100ms ease-out, top 100ms ease-out, transform 200ms ease-out, background-color 200ms ease-out"
      : "left 100ms ease-out, top 100ms ease-out, transform 200ms ease-out, background-color 200ms ease-out",
  };
  const outerStyle: React.CSSProperties = {
    left: `${x}px`,
    top: `${y}px`,
    transition: isClicking
      ? "left 200ms ease-out, top 200ms ease-out, transform 250ms ease-in-out, border-color 250ms ease-in-out"
      : "left 200ms ease-out, top 200ms ease-out, transform 250ms ease-in-out, border-color 250ms ease-in-out",
  };

  return (
    <>
      {/* Inner dot: fast snap with smooth scale/color */}
      <div
        className={`
          fixed z-[9999] pointer-events-none
          transform -translate-x-1/2 -translate-y-1/2 rounded-full
          ${isClicking ? "scale-50" : "scale-100"}
          ${isPointer ? "w-5 h-5 bg-portfolio-500/40" : "w-4 h-4 bg-portfolio-600"}
        `}
        style={innerStyle}
      />

      {/* Outer ring: lagging follow with smooth scale/color */}
      <div
        className={`
          fixed z-[9998] pointer-events-none
          transform -translate-x-1/2 -translate-y-1/2 rounded-full border-2
          w-8 h-8
          ${isClicking ? "scale-75" : "scale-100"}
          ${isPointer ? "border-portfolio-500" : "border-portfolio-600/30"}
        `}
        style={outerStyle}
      />
    </>
  );
}
