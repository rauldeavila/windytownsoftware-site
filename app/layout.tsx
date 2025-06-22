import { Inter } from "next/font/google";
import "./globals.css";
import { LayoutProvider } from "./components/LayoutProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Windytown Software | Makers of Contexts Task Management App",
  description: "Windytown Software creates elegant productivity apps including Contexts - a powerful task management app based on GTD® methodology that helps you focus on what matters most.",
  keywords: ["Windytown Software", "Contexts app", "task management", "productivity", "GTD", "Getting Things Done", "iOS app", "focus app"],
  authors: [{ name: "Windytown Software" }],
  openGraph: {
    title: "Windytown Software | Makers of Contexts Task Management App",
    description: "Creators of elegant productivity apps including Contexts - a powerful task management app based on GTD® methodology.",
    url: "https://windytownsoftware.com/",
    siteName: "Windytown Software",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Windytown Software",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Windytown Software | Makers of Contexts Task Management App",
    description: "Creators of elegant productivity apps including Contexts - a powerful task management app based on GTD® methodology.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#c6c6c6]">
      <head>
        <meta name="theme-color" content="#171717" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`bg-[#c6c6c6] text-[#333] relative min-h-screen`}>
        <LayoutProvider>
          {children}
        </LayoutProvider>
      </body>
    </html>
  );
}
