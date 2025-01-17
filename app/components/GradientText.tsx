"use client";
import React, { useState, useRef, useEffect } from "react";

const GradientText = ({ children, className = "" }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const textRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (textRef.current) {
      setDimensions({
        width: textRef.current.offsetWidth,
        height: textRef.current.offsetHeight,
      });
    }
  }, [children]);

  const handleMouseMove = (e) => {
    const rect = textRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={textRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative inline-block overflow-visible ${className}`}
      style={{ padding: "1px" }}
    >
      {/* Base text layer */}
      <span className="block">{children}</span>

      {/* Gradient mask layer */}
      <span
        className="absolute inset-0 z-20 select-none"
        style={{
          opacity: isHovered ? 1 : 0,
          backgroundImage: `radial-gradient(circle 130px at ${mousePosition.x}px ${mousePosition.y}px, #8E7DFF, #5767B0, transparent 70%)`,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          color: "transparent",
          transition: "opacity 0.3s ease",
          left: "-1px",
          right: "-1px",
          width: "calc(100% + 2px)",
          mixBlendMode: "lighten",
        }}
      >
        {children}
      </span>
    </div>
  );
};

export default GradientText;
