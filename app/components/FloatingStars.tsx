"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const FloatingStars = () => {
  const [stars, setStars] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const baseOpacity = 0.75;

  useEffect(() => {
    // Check mobile only once at initialization
    const checkMobile = window.innerWidth <= 768;
    setIsMobile(checkMobile);

    const generateStars = () => {
      const newStars = [];
      const numStars = 25;

      // Use fixed dimensions for mobile
      const screenWidth = checkMobile ? 360 : window.innerWidth;
      const screenHeight = checkMobile
        ? 800
        : Math.max(
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight,
            document.documentElement.clientHeight
          );

      for (let i = 0; i < numStars; i++) {
        // For mobile, use percentage-based positioning instead of pixels
        const x = checkMobile
          ? `${Math.random() * 80 + 10}%` // 10% to 90% of width
          : Math.max(
              20,
              Math.min(Math.random() * screenWidth, screenWidth - 20)
            );

        const y = checkMobile
          ? `${Math.random() * 80 + 10}%` // 10% to 90% of height
          : Math.random() * screenHeight;

        newStars.push({
          id: i,
          x,
          y,
          variant: Math.floor(Math.random() * 4) + 1,
          baseRotation: Math.random() * 360,
          scale: 0.8 + Math.random() * 0.4,
          floatDuration: 3 + Math.random() * 4,
          opacity: baseOpacity + Math.random() * 0.2,
        });
      }
      return newStars;
    };

    setStars(generateStars());

    // Only add resize listener for desktop
    if (!checkMobile) {
      window.addEventListener("resize", () => setStars(generateStars()));
      return () =>
        window.removeEventListener("resize", () => setStars(generateStars()));
    }
  }, []); // Empty dependency array so it only runs once

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute"
          style={{
            left: star.x,
            top: star.y,
            transform: `rotate(${star.baseRotation}deg) scale(${star.scale})`,
            animation: `float ${star.floatDuration}s ease-in-out infinite`,
            opacity: star.opacity,
          }}
        >
          <Image
            src={`/star-${star.variant}.png`}
            alt="Floating star"
            width={32}
            height={32}
            className="w-8 h-8"
            priority={true}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingStars;
