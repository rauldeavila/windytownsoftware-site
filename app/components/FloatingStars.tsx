"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const FloatingStars = () => {
  const [stars, setStars] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredStarId, setHoveredStarId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef(null);
  const containerRef = useRef(null);

  // Base opacity for stars
  const baseOpacity = 0.75;

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(
        window.innerWidth <= 768 ||
          "ontouchstart" in window ||
          navigator.maxTouchPoints > 0
      );
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const generateStars = () => {
      const newStars = [];
      const numStars = isMobile ? 20 : 30; // Fewer stars on mobile

      const docHeight = Math.max(
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight,
        document.documentElement.clientHeight
      );

      for (let i = 0; i < numStars; i++) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * docHeight;

        // Ensure stars are not too close to the edges on mobile
        const safeX = isMobile
          ? Math.max(20, Math.min(x, window.innerWidth - 20))
          : x;

        newStars.push({
          id: i,
          x: safeX,
          y: y,
          variant: Math.floor(Math.random() * 4) + 1,
          baseRotation: Math.random() * 360,
          scale: 0.8 + Math.random() * 0.4,
          floatDuration: 3 + Math.random() * 4,
          opacity: baseOpacity + Math.random() * 0.2,
        });
      }
      return newStars;
    };

    const handleScroll = () => {
      if (isMobile) {
        setIsScrolling(true);

        // Clear existing timeout
        if (scrollTimeout.current) {
          clearTimeout(scrollTimeout.current);
        }

        // Set new timeout
        scrollTimeout.current = setTimeout(() => {
          setIsScrolling(false);
        }, 150);
      }
    };

    setStars(generateStars());

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", () => setStars(generateStars()));

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile) {
      const handleMouseMove = (e) => {
        setMousePos({
          x: e.clientX + window.scrollX,
          y: e.clientY + window.scrollY,
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [isMobile]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 overflow-hidden"
      style={{
        minHeight: "100%",
        width: "100%",
      }}
    >
      {stars.map((star) => {
        // Only apply parallax effect on desktop and when not scrolling
        const dx =
          !isMobile && !isScrolling
            ? ((mousePos.x - star.x) / window.innerWidth) * 30
            : 0;
        const dy =
          !isMobile && !isScrolling
            ? ((mousePos.y - star.y) / window.innerHeight) * 30
            : 0;

        const isHovered = hoveredStarId === star.id && !isMobile;

        return (
          <div
            key={star.id}
            className="absolute will-change-transform"
            style={{
              left: `${star.x}px`,
              top: `${star.y}px`,
              transform: `
                translate(${dx * star.scale}px, ${dy * star.scale}px)
                rotate(${star.baseRotation}deg)
                scale(${isHovered ? star.scale * 1.4 : star.scale})
              `,
              animation: `float ${star.floatDuration}s ease-in-out infinite`,
              transition: isScrolling ? "none" : "all 0.3s ease-out",
              opacity: star.opacity,
            }}
            onMouseEnter={() => !isMobile && setHoveredStarId(star.id)}
            onMouseLeave={() => !isMobile && setHoveredStarId(null)}
          >
            <div
              className={`relative transition-all duration-300 ${
                isHovered ? "scale-110" : ""
              }`}
            >
              <Image
                src={`/star-${star.variant}.png`}
                alt="Floating star"
                width={32}
                height={32}
                className={`w-8 h-8 transition-all duration-300 ${
                  isHovered ? "brightness-125 rotate-180" : ""
                }`}
              />
              {isHovered && (
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
