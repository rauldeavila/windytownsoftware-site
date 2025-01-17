import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingStars from "./components/FloatingStars";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "windytown software",
  description: "Indie software company creating retro-inspired apps and games",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-[#f5e5c0] text-[#333] relative min-h-screen`}>
        <div className="absolute inset-0">
          <FloatingStars />
        </div>
        <div className="flex flex-col min-h-screen relative z-10">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
