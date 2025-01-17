import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
      <body className={`bg-[#f5e5c0] text-[#333]`}>
        <div className="flex flex-col min-h-screen">
          {/* <div className="bg-[#ff6b6b] h-8"></div> */}
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          {/* <div className="bg-[#ff6b6b] h-8"></div> */}
        </div>
      </body>
    </html>
  );
}
