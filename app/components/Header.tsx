"use client";

import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { useRouter } from "next/navigation";
import GradientText from "./GradientText";

export default function Header() {
  const router = useRouter();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push("/#contact");
  };

  return (
    <header className="relative">
      <div className="border-b-[1px] border-[#fafafa] bg-[#333333] p-4 shadow-[0_4px_0_0_#333333]">
        <div className="container mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center text-4xl font-bold retro-text text-[#f5f5f5]"
          >
            <GradientText>
              <span className="tracking-[-0.01em] text-[#f5f5f5]">
                windytown
              </span>
            </GradientText>
            <span className="text-[#B3B3B3] tracking-[-0.01em] ml-0.5">
              software
            </span>
          </Link>
          {/* Menu Desktop */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="/blog"
                  className="text-xl hover:text-[#97A8FC] transition-colors retro-text text-[#f5f5f5]"
                >
                  Blog
                </Link>
              </li>
              <li>
                <a
                  href="/#contact"
                  onClick={handleContactClick}
                  className="text-xl hover:text-[#97A8FC] transition-colors retro-text text-[#f5f5f5]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          {/* Menu Mobile */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
