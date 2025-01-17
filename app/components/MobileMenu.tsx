"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    router.push("/#contact");
  };

  return (
    <div className="relative z-50">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 -mr-2 w-10 h-10 flex items-center justify-center"
        aria-label="Menu"
      >
        <div className={`hamburger ${isOpen ? "open" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-12 right-0 bg-[#333333] border-[1px] border-[#fafafa] p-4 min-w-[160px] shadow-lg rounded-lg">
          <nav className="flex flex-col gap-4">
            <Link
              href="/blog"
              onClick={() => setIsOpen(false)}
              className="text-lg hover:text-[#97A8FC] transition-colors retro-text text-[#f5f5f5] whitespace-nowrap"
            >
              Blog
            </Link>
            <a
              href="/#contact"
              onClick={handleContactClick}
              className="text-lg hover:text-[#97A8FC] transition-colors retro-text text-[#f5f5f5] whitespace-nowrap"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
