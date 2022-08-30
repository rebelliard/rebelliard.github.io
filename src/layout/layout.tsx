import * as React from 'react'
import { Footer } from './footer'
import { Header } from './header'
import 'typeface-roboto-slab'
import 'typeface-open-sans'
import '../styles/main.scss'

export function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className="container">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
