import React from 'react'
import Head from '../components/Head'
import Link from 'gatsby-link'
import { navigateTo } from 'gatsby-link'
import get from 'lodash/get'

class BlogPostTemplate extends React.Component {

  handleKeyDown = (e) => {
    const { location } = this.props
    const { previous, next } = this.props.pathContext

    const keystate = {
      'ArrowLeft': () => {
        if (previous) {
          navigateTo(previous.fields.slug)
        }
      },
      'ArrowRight': () => {
        if (next) {
          navigateTo(next.fields.slug)
        }
      }
    }

    if (keystate.hasOwnProperty(e.key)) {
      keystate[e.key]();
    }
  }

  componentWillMount(){
    if (typeof document !== 'undefined') {
      document.addEventListener('keydown', this.handleKeyDown)
    }
  }

  componentWillUnmount() {
    if (typeof document !== 'undefined') {
      document.removeEventListener('keydown', this.handleKeyDown)
    }
  }

  render() {
    const post = this.props.data.markdownRemark
    const { location } = this.props
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pathContext
    return (
      <main id="main" className="section main blog blogpost">
        <Head
          title={post.frontmatter.title || siteTitle}
          description={post.frontmatter.description}
          image={post.frontmatter.image}
          location={location}
          previous={get(previous, 'fields.slug')}
          next={get(next, 'fields.slug')}/>
        <h1>{post.frontmatter.title}</h1>
        <time itemProp="datePublished">{post.frontmatter.date}</time>
        <article dangerouslySetInnerHTML={{ __html: post.html }} />

        <ul className="siblings">
            <li>
              {previous && (
                <Link
                  to={previous.fields.slug}
                  rel="prev"
                  title={previous.frontmatter.title}
                  aria-label={previous.frontmatter.title}
                  className="previous"></Link>
              )}
            </li>

            <li>
              {next && (
                <Link
                  to={next.fields.slug}
                  rel="next"
                  title={next.frontmatter.title}
                  aria-label={next.frontmatter.title}
                  className="next"></Link>
              )}
            </li>
        </ul>
      </main>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        teaser
        description
        image
        date(formatString: "MMMM DD, YYYY")
        permalink
      }
    }
  }
`
