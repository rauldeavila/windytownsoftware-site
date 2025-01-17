"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    // Criar estrelas
    const starsContainer = document.querySelector(".stars-container");
    if (starsContainer) {
      for (let i = 0; i < 50; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.width = Math.random() * 3 + "px";
        star.style.height = star.style.width;
        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";
        star.style.animationDelay = Math.random() * 1 + "s";
        starsContainer.appendChild(star);
      }
    }

    // Efeito parallax
    const handleParallax = (e: MouseEvent) => {
      const stars = document.querySelectorAll(".star");
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;

      stars.forEach((star) => {
        const speed = parseFloat((star as HTMLElement).style.width) * 0.5;
        const x = mouseX * speed;
        const y = mouseY * speed;
        (star as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener("mousemove", handleParallax);

    return () => {
      window.removeEventListener("mousemove", handleParallax);
    };
  }, []);

  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto text-center">
        <h1 className="text-6xl md:text-9xl font-bold mb-6 retro-text">
          {/* Task{" "} */}
          <span className="relative inline-block">
            {/* <span className="stars-container"></span> */}
            {/* <span className="magic-text">Task Wizard</span> */}
            <span>Task Wizard</span>
          </span>
        </h1>
        <p className="text-2xl mb-12 mt-[-20px] retro-text">
          A blazing fast task and project manager for macOS
        </p>
        {/* <p className="text-2xl mb-8 mt-[-35px] retro-text">SIMPLE</p> */}
        <div className="flex justify-center mb-8">
          <div className="floating-window">
            <Image
              src="/projects-ss-1.png"
              alt="task wizard - macOS App"
              width={1000}
              height={600}
              className="rounded-lg shadow-2xl"
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
