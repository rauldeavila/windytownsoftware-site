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
          <div>
            <span className="text-black linik-sans-extrabold">windytown</span><span className="text-gray-500 linik-sans-italic">software</span>
          </div>
        </Link>
        {/* Menu Desktop */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/apps/contexts"
                className="text-lg font-medium text-gray-700 hover:text-black transition-colors linik-sans"
              >
                Contexts
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-lg font-medium text-gray-700 hover:text-black transition-colors linik-sans"
              >
                About
              </Link>
            </li>
            <li>
              <a
                href="/#contact"
                onClick={handleContactClick}
                className="text-lg font-medium text-gray-700 hover:text-black transition-colors linik-sans"
              >
                Contact
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
