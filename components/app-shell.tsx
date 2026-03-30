'use client'

import { ReactNode } from 'react'
import { ThemeProvider } from '@/lib/theme/ThemeProvider'
import { Navbar } from '@/components/navbar'

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <Navbar />
      {children}
    </ThemeProvider>
  )
}
