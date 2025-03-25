"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function ContextsHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative w-full py-4 border-b border-gray-200">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/apps/contexts" className="flex items-center">
          <Image
            src="/contexts/icon.png"
            alt="Contexts icon"
            width={40}
            height={40}
            className="h-auto mr-2"
          />
          <span className="text-xl font-bold text-black">Contexts</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          {/* <Link
            href="/apps/contexts/features"
            className="text-gray-700 hover:text-black transition-colors"
          >
            Features
          </Link> */}
          <Link
            href="/apps/contexts/pricing"
            className={`transition-colors ${
              pathname === "/apps/contexts/pricing"
                ? "font-bold text-black"
                : "text-gray-700 hover:text-black"
            }`}
          >
            Pricing
          </Link>
          <Link
            href="/apps/contexts/about"
            className={`transition-colors ${
              pathname === "/apps/contexts/about"
                ? "font-bold text-black"
                : "text-gray-700 hover:text-black"
            }`}
          >
            About
          </Link>
          <a
            href="https://apps.apple.com/br/app/contexts/id6743253834"
            className="bg-black text-white px-4 py-2 rounded-md rounded-[16px] hover:bg-gray-800 transition-colors"
          >
            Download Contexts
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md z-50">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="/apps/contexts/features"
              className="text-gray-700 hover:text-black transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/apps/contexts/pricing"
              className={`transition-colors py-2 ${
                pathname === "/apps/contexts/pricing"
                  ? "font-bold text-black"
                  : "text-gray-700 hover:text-black"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/apps/contexts/about"
              className={`transition-colors py-2 ${
                pathname === "/apps/contexts/about"
                  ? "font-bold text-black"
                  : "text-gray-700 hover:text-black"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <a
              href="https://apps.apple.com/app/contexts/id1547991744"
              className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors inline-block"
              onClick={() => setIsMenuOpen(false)}
            >
              Download Contexts
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
