"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!isHovered) return;

    const image = e.currentTarget;
    const rect = image.getBoundingClientRect();

    // Calculate mouse position relative to image center
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate rotation based on mouse position
    // Reduced rotation amount to 10 degrees for subtler effect
    const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 10;
    const rotateX = -((e.clientY - centerY) / (rect.height / 2)) * 10;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto text-center">
        <h1 className="text-6xl md:text-9xl font-bold mb-6 retro-text">
          <span className="relative inline-block">
            <span>Task Wizard</span>
          </span>
        </h1>
        <p className="text-2xl mb-12 mt-[-20px] retro-text">
          A blazing fast task and project manager for macOS
        </p>
        <div className="flex justify-center mb-8">
          <div
            style={{
              transform: `perspective(1000px) rotateX(${
                rotation.x
              }deg) rotateY(${rotation.y}deg) scale(${isHovered ? 1.02 : 1})`,
              transition: "all 0.15s ease",
              willChange: "transform",
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src="/projects-ss-1.png"
              alt="task wizard - macOS App"
              width={1000}
              height={600}
              className="rounded-lg shadow-2xl"
              style={{ pointerEvents: "none" }}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <a
            href="#"
            className="px-6 py-3 mt-[60px] mb-[-60px] text-xl retro-button retro-text"
          >
            Download Now
          </a>
        </div>
      </div>
    </section>
  );
}
