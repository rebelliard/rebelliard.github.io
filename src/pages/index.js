import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    const links = [
      {
        href: 'https://twitter.com/rebelliard',
        label: 'Twitter'
      },
      {
        href: 'https://www.linkedin.com/in/rebelliard',
        label: 'LinkedIn'
      },
      {
        href: 'https://github.com/rebelliard',
        label: 'GitHub'
      },
      {
        href: 'http://stackoverflow.com/users/236169/rebelliard',
        label: 'Stack Overflow'
      },
      {
        href: 'http://www.last.fm/user/belliard',
        label: 'Last.fm'
      },
      {
        href: 'mailto:me@rebelliard.com?subject=Hello',
        label: 'Email',
        target: null
      },
      {
        href: '/blog/',
        label: 'Blog',
        local: true,
      }
    ]

    return (
      <div>
        <Helmet title={siteTitle} />
        <ul>
          {links.map(link =>
            <li key={link.href}>
              {link.local
                ?
                  <Link to={'/blog/'}>Blog</Link>
                :
                  <a
                    href={link.href}
                    target={link.target !== undefined ? link.target : '_blank'}>
                    {link.label}
                  </a>
                }
            </li>
          )}
        </ul>
        <p style={{maxWidth: 290}}>
          <small>
            If you're thinking: "<i>Whoa</i>, what an ugly site!", you're right!
            You're browsing my site in the middle of a complete redesign
            from Jekyll + Generic Theme to <a href="https://www.gatsbyjs.org/" target="_blank">GatsbyJS</a> + <a href="https://gridbyexample.com/" target="_blank">CSS Grid</a>.
            This is my way of forcing myself to do it. <span rel="icon">😂</span>
          </small>
        </p>
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            permalink
          }
        }
      }
    }
  }
`
