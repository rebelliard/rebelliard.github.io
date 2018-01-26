import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    if (location.pathname === rootPath) {
      header = (
        <header>
          <h1 style={{marginBottom: '4px'}}>
            Rafael E. Belliard
          </h1>
          <h2 style={{fontSize:'1.1em'}}>Software Developer</h2>
        </header>
      )
    } else {
      header = (
        <div>
          <Link to={'/'}>Home</Link>
          &nbsp;
          <Link to={'/blog/'}>Blog</Link>
          &nbsp;
          <Link to={'/about/'}>About</Link>
        </div>
      )
    }
    return (
      <section>
        {header}
        {children()}
      </section>
    )
  }
}

export default Template
