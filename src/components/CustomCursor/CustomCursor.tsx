import { useEffect, useRef, useState } from "react";

const interactiveSelector =
  'a, button, [role="button"], input, textarea, select, label, [data-cursor="hover"]';

const CustomCursor = () => {
  const innerRef = useRef<HTMLDivElement | null>(null);
  const outerRef = useRef<HTMLDivElement | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (isCoarsePointer || prefersReducedMotion) {
      return;
    }

    setEnabled(true);
    document.body.classList.add("custom-cursor-enabled");

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let rafId = 0;

    const moveCursor = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      const target = event.target as HTMLElement | null;
      setIsHovering(Boolean(target?.closest(interactiveSelector)));
    };

    const onMouseDown = () => setIsPressed(true);
    const onMouseUp = () => setIsPressed(false);

    const render = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;

      if (innerRef.current) {
        innerRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      if (outerRef.current) {
        outerRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      rafId = window.requestAnimationFrame(render);
    };

    rafId = window.requestAnimationFrame(render);
    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.body.classList.remove("custom-cursor-enabled");
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <div
        ref={outerRef}
        className={`custom-cursor-ring ${isHovering ? "is-hovering" : ""} ${isPressed ? "is-pressed" : ""}`}
      />
      <div
        ref={innerRef}
        className={`custom-cursor-dot ${isHovering ? "is-hovering" : ""} ${isPressed ? "is-pressed" : ""}`}
      />
    </>
  );
};

export default CustomCursor;
