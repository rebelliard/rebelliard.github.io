import * as React from 'react'
import Link from 'gatsby-link'

export function Header() {
  return (
    <header className="section header">
      <h1 className="header-item title">
        <Link to={'/'}>rafael.do</Link>
      </h1>
      <nav className="header-item nav" role="navigation">
        <a className="nav-item" href="mailto:me@rafael.do">
          Contact me
        </a>
      </nav>
    </header>
  )
}
