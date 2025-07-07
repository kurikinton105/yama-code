'use client'

import { ReactNode } from 'react'

interface MainLayoutProps {
  children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-cyan-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-xl font-bold">
            yama-code
          </h1>
        </div>
      </header>
      
      <main className="flex-1">
        {children}
      </main>
      
      <footer className="text-center py-5 text-sm text-muted-foreground">
        <p>Copyright yama 2020 - {currentYear}.</p>
      </footer>
    </div>
  )
}