"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const FloatingStars = () => {
  const [stars, setStars] = useState([]);
  const baseOpacity = 0.75;

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      const numStars = 25;

      const docHeight = Math.max(
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight,
        document.documentElement.clientHeight
      );

      for (let i = 0; i < numStars; i++) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * docHeight;

        // Keep stars away from the edges
        const safeX = Math.max(20, Math.min(x, window.innerWidth - 20));

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

    setStars(generateStars());
    window.addEventListener("resize", () => setStars(generateStars()));

    return () => {
      window.removeEventListener("resize", () => setStars(generateStars()));
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute"
          style={{
            left: `${star.x}px`,
            top: `${star.y}px`,
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
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingStars;
