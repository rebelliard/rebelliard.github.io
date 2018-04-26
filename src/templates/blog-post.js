import React from 'react'
import Head from '../components/Head'
import Link from 'gatsby-link'
import get from 'lodash/get'

class BlogPostTemplate extends React.Component {
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
          location={location}/>
        <h1>{post.frontmatter.title}</h1>
        <time itemProp="datePublished">{post.frontmatter.date}</time>
        <article dangerouslySetInnerHTML={{ __html: post.html }} />

        <hr className="divider"/>
        <ul className="siblings">
          {previous && (
            <li>
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            </li>
          )}

          {next && (
            <li>
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            </li>
          )}
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
