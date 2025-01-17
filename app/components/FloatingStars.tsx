"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const FloatingStars = () => {
  const [stars, setStars] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredStarId, setHoveredStarId] = useState(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const containerRef = useRef(null);

  // Base opacity for stars
  const baseOpacity = 0.75;

  useEffect(() => {
    // Check if device is touch-enabled
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);

    const generateStars = () => {
      const newStars = [];
      const numStars = 30;

      const docHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );

      for (let i = 0; i < numStars; i++) {
        newStars.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * docHeight,
          variant: Math.floor(Math.random() * 4) + 1,
          baseRotation: Math.random() * 360,
          scale: 0.8 + Math.random() * 0.4,
          floatDuration: 3 + Math.random() * 4,
          opacity: baseOpacity + Math.random() * 0.2,
        });
      }
      return newStars;
    };

    const handleResize = () => {
      setStars(generateStars());
    };

    setStars(generateStars());

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Only add mousemove listener if not a touch device
    if (!isTouchDevice) {
      const handleMouseMove = (e) => {
        setMousePos({
          x: e.clientX + window.scrollX,
          y: e.clientY + window.scrollY,
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [isTouchDevice]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0"
      style={{
        minHeight: "100%",
        width: "100%",
      }}
    >
      {stars.map((star) => {
        // Calculate parallax effect only for non-touch devices
        const dx = isTouchDevice
          ? 0
          : ((mousePos.x - star.x) / window.innerWidth) * 30;
        const dy = isTouchDevice
          ? 0
          : ((mousePos.y - star.y) / window.innerHeight) * 30;
        const isHovered = hoveredStarId === star.id;

        return (
          <div
            key={star.id}
            className="absolute"
            style={{
              left: `${star.x}px`,
              top: `${star.y}px`,
              transform: `
                translate(${dx * star.scale}px, ${dy * star.scale}px)
                rotate(${star.baseRotation}deg)
                scale(${isHovered ? star.scale * 1.4 : star.scale})
              `,
              animation: `float ${star.floatDuration}s ease-in-out infinite`,
              transition: "all 0.3s ease-out",
              opacity: star.opacity,
            }}
            onMouseEnter={() => !isTouchDevice && setHoveredStarId(star.id)}
            onMouseLeave={() => !isTouchDevice && setHoveredStarId(null)}
          >
            <div
              className={`
              relative
              transition-all duration-300
              ${isHovered ? "scale-110" : ""}
            `}
            >
              <Image
                src={`/star-${star.variant}.png`}
                alt="Floating star"
                width={32}
                height={32}
                className={`
                  w-8 h-8
                  transition-all duration-300
                  ${isHovered ? "brightness-125 rotate-180" : ""}
                `}
              />
              {isHovered && !isTouchDevice && (
                <div className="absolute inset-0 animate-ping opacity-75">
                  <Image
                    src={`/star-${star.variant}.png`}
                    alt="Star glow effect"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FloatingStars;
