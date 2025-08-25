import './globals.css'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'Hello World',
  description: 'A simple Hello World page using Next.js and Tailwind CSS',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 antialiased dark:bg-gray-950 dark:text-gray-100">
        {children}
      </body>
    </html>
  )
}
