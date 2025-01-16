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
        <h1 className="text-6xl md:text-8xl font-bold mb-6 retro-text">
          {/* Task{" "} */}
          <span className="relative inline-block">
            {/* <span className="stars-container"></span> */}
            {/* <span className="magic-text">Task Wizard</span> */}
            <span>Task Wizard</span>
          </span>
        </h1>
        <p className="text-2xl mb-8 mt-[-20px] retro-text">
          A blazing fast task and project manager for macOS
        </p>
        <div className="flex justify-center mb-8">
          <div className="retro-border retro-gradient p-4">
            <Image
              src="/placeholder.svg"
              alt="WOLFBIT macOS App"
              width={800}
              height={600}
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <a href="#" className="px-6 py-3 text-xl retro-button retro-text">
            Download Now
          </a>
        </div>
      </div>
    </section>
  );
}
