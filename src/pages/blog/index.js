import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Head from '../../components/Head'

class BlogIndex extends React.Component {
  render() {
    const title = 'Blog'
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    const { location } = this.props

    return (
      <main id="main" className="section main blog">
        <Head
          title={title}
          description="Blog index."
          location={location}/>
        <h1>{title}</h1>
        {posts
          .filter(post => !get(post, 'node.frontmatter.disableListing'))
          .map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug
            return (
              <article key={node.fields.slug}>
                <h2>
                  <Link to={node.fields.slug}>{title}</Link>
                </h2>
                <time itemProp="datePublished">{node.frontmatter.date}</time>
                <summary dangerouslySetInnerHTML={{ __html: node.excerpt }}></summary>
              </article>
            )
          })}
      </main>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogQuery {
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
