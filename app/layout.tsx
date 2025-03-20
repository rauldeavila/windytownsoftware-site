import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingStars from "./components/FloatingStars";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Contexts - The right task, in the right place, at the right time.",
  description: "A powerful task management app that helps you focus on what matters most.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#c6c6c6]">
      <body className={`bg-[#c6c6c6] text-[#333] relative min-h-screen`}>
        {/* FloatingStars component temporarily disabled
        <div className="absolute inset-0">
          <FloatingStars />
        </div>
        */}
        <div className="flex flex-col min-h-screen relative z-10">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
