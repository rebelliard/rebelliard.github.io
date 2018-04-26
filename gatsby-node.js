const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage, createRedirect } = boundActionCreators

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    teaser
                    description
                    tags
                    image
                    redirectFrom
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create blog posts pages.
        const posts = result.data.allMarkdownRemark.edges;

        const createPost = (post, index) => {
          const previous = index === posts.length - 1 ? false : posts[index + 1].node;
          const next = index === 0 ? false : posts[index - 1].node;
          const path = post.node.fields.slug

          createPage({
            path: path,
            component: blogPost,
            context: {
              slug: path,
              previous,
              next,
            },
          })

          const {redirectFrom} = post.node.frontmatter

          /**
           * Need to handle trailing-slashed and non-trailing-slashed
           * fromPaths separately, Gatsby serves page components
           * at either version by default, but we need to explicitly redirect
           * both versions independently, more on page components:
           * @see https://gatsbyjs.org/docs/building-with-components/
           * @see https://gatsbyjs.org/docs/creating-and-modifying-pages/#removing-trailing-slashes
           */
          if (Array.isArray(redirectFrom) && redirectFrom.length) {
            redirectFrom.forEach(redirect => {
              const paths = [
                redirect,
                redirect.endsWith('/') ? redirect.slice(0, -1) : `${redirect}/`
              ]

              paths.forEach(fromPath => {
                createRedirect({
                  fromPath,
                  toPath: path,
                  isPermanent: true,
                  redirectInBrowser: true,
                })
              })
            })
          }
        }

        _.each(posts, createPost)
      })
    )
  })
}

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === `MarkdownRemark`) {
    const value = _.get(node, 'frontmatter.permalink') || createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
