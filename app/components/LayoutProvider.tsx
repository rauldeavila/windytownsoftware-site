"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export function LayoutProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isContextsApp = pathname.startsWith('/apps/contexts');

  return (
    <div className="flex flex-col min-h-screen relative z-10">
      {!isContextsApp && <Header />}
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
