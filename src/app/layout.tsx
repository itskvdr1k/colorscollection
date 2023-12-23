import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Color Palette',
  description: 'Color Palette is a tool, helping you to choose you favority color',
  keywords: "color, palette, rgb",
  authors: [{name: "kvdr1k", url: "https://instagram.com/kvdr1k"}]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
