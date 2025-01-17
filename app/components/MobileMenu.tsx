"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Botão Hamburguer */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2"
        aria-label="Menu"
      >
        <div className={`hamburger ${isOpen ? "open" : ""}`}>
          <span className="h-0.5 w-6 bg-[#f5f5f5] block mb-1"></span>
          <span className="h-0.5 w-6 bg-[#f5f5f5] block mb-1"></span>
          <span className="h-0.5 w-6 bg-[#f5f5f5] block"></span>
        </div>
      </button>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="absolute top-16 right-4 bg-[#333333] border-[1px] border-[#fafafa] p-4 min-w-[200px] shadow-lg">
          <nav className="flex flex-col gap-4">
            <Link
              href="/blog"
              className="text-xl hover:text-[#97A8FC] transition-colors retro-text text-[#f5f5f5]"
            >
              Blog
            </Link>
            <a
              href="#contact"
              className="text-xl hover:text-[#97A8FC] transition-colors retro-text text-[#f5f5f5]"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
