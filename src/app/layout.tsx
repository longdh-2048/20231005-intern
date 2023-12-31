import React from 'react'
import './globals.scss'
import type { Metadata } from 'next'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import ReduxProvider from './store/provider'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

const RootLayout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <html lang="en">
      <body>
        <div className='w-full font-sans[Avenir Next]'>
          <ReduxProvider>
            <Header />
              {children}
            <Footer />
          </ReduxProvider>
        </div>
      </body>
    </html>
  )
}

export default RootLayout
