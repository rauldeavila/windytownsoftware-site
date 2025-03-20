"use client";

import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHovered) return;

    const image = e.currentTarget;
    const rect = image.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

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
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
          Contexts
        </h1>

        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-black">
            The right task,<br />
            in the right place,<br />
            at the right time.
          </h2>
        </div>

        <div className="flex justify-center mb-16">
          <a href="https://apps.apple.com/app/contexts/id1547991744" className="hover:opacity-90 transition-all">
            <Image
              src="/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg"
              alt="Download on the App Store"
              width={200}
              height={67}
            />
          </a>
        </div>

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
          className="relative mx-auto max-w-[350px]"
        >
          {/* iPhone frame */}
          <Image
            src="/contexts/iphone-frame.png"
            alt="iPhone frame"
            width={350}
            height={700}
            className="relative z-10"
            priority
          />
          {/* App screenshot */}
          <Image
            src="/contexts/screenshot.png"
            alt="Contexts app screenshot"
            width={320}
            height={650}
            className="absolute top-[8px] left-[15px] z-0 rounded-[32px]"
          />
        </div>
      </div>
    </section>
  );
}
