import { Urbanist } from 'next/font/google'

import './globals.css'
import Footer from '@/app/components/Footer'
import Announcement from './components/Announcement'
import AuthProvider from './components/AuthProvider/AuthProvider'
import Navbar from './components/Navbar'
import { Providers } from './GlobalRedux/provider'
import Slider from './components/Slider'

const font = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'Store',
  description: 'Store - The place for all your purchases.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
    <Providers>
    <html lang="en">
      <body >
          <Announcement />
          <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  </Providers>
  </AuthProvider>
  )
}
