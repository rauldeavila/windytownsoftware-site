"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export function LayoutProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isContextsApp = pathname.startsWith('/apps/contexts');
  const isSpecialPage = pathname === '/meu-amoi';
  const isPlanilha = pathname.startsWith('/planilha');

  return (
    <div className="flex flex-col min-h-screen relative z-10">
      {!isContextsApp && !isSpecialPage && !isPlanilha && <Header />}
      <main className="flex-grow">{children}</main>
      {!isSpecialPage && !isPlanilha && <Footer />}
    </div>
  );
}
