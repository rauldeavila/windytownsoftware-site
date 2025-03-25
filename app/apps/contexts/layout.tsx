import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ContextsHeader from './components/ContextsHeader'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Contexts - Task Management App | Windytown Software",
  description: "Contexts is a powerful task management app based on GTD® methodology that helps you focus on what matters most.",
  keywords: ["Contexts app", "task management", "productivity", "GTD", "Getting Things Done", "iOS app", "focus app"],
}

export default function ContextsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ContextsHeader />
      <main>
        {children}
      </main>
    </>
  )
}
