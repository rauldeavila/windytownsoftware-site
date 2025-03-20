"use client";

import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push("/#contact");
  };

  return (
    <header className="relative w-full py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center text-2xl sm:text-3xl font-bold"
        >
          <span className="text-black">
            windytownsoftware
          </span>
        </Link>
        {/* Menu Desktop */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <a
                href="/#contact"
                onClick={handleContactClick}
                className="text-lg font-medium text-gray-700 hover:text-black transition-colors"
              >
                Get in touch
              </a>
            </li>
          </ul>
        </nav>
        {/* Menu Mobile */}
        <div className="flex items-center md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
