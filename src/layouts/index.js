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
        <h1>
          <Link to={'/'}>Rafael Belliard</Link>
        </h1>
      )
    } else {
      header = (
        <div>
          <Link to={'/'}>Home</Link>
          <h3>
            <Link to={'/blog/'}>Blog</Link>
          </h3>
        </div>
      )
    }
    return (
      <div>
        {header}
        {children()}
      </div>
    )
  }
}

export default Template
