import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import { navigateTo } from 'gatsby-link'
import Head from '../components/Head'

class BlogIndex extends React.Component {
  state = {}

  componentDidMount() {
    this.setState({
      showDetails: window.location.hash === '#more'
    })
  }

  handleKeyDown = e => {
    if (['ArrowLeft', 'ArrowRight'].includes(e.key)) {
      navigateTo('/blog/')
    }
  }

  componentWillMount() {
    if (typeof document !== 'undefined') {
      document.addEventListener('keydown', this.handleKeyDown)
    }
  }

  componentWillUnmount() {
    if (typeof document !== 'undefined') {
      document.removeEventListener('keydown', this.handleKeyDown)
    }
  }

  toggleDetails = e => {
    e.preventDefault()

    this.setState({
      showDetails: !this.state.showDetails
    })
  }

  Details = () => {
    if (!this.state.showDetails) {
      return null
    }

    return (
      <React.Fragment>
        <article id="more" className="detail">
          <p>
            I'm a software developer from the Dominican Republic living in the Stockholm County of
            Sweden. I enjoy working with technologies like AWS Lambda, Node.js, React.js, and
            GraphQL.
          </p>

          <p>
            I'm passionate about working smart and elevating the developer experience to facilitate
            building great user experiences that ship on time.
          </p>

          <p>
            I occassionally share my thoughts on <Link to={'/blog/'}>my blog</Link> and{' '}
            <a href={'https://twitter.com/rebelliard'} target="_blank" rel="noopener noreferrer">
              tweet
            </a>
            .
          </p>
        </article>
        <article className="detail">
          <h3>Currently working on</h3>
          <ul>
            <li>
              An innovative employee engagement tool at{' '}
              <a href="https://www.andfrankly.com/" target="_blank" rel="noopener noreferrer">
                &frankly
              </a>{' '}
              (day job).
            </li>
            <li>
              Studying to get certified as an{' '}
              <a
                href="https://aws.amazon.com/certification/certified-developer-associate/"
                target="_blank"
                rel="noopener noreferrer"
              >
                “AWS Certified Developer”
              </a>.
            </li>
          </ul>
        </article>
        <article className="detail">
          <h3>Trying to do more of</h3>
          <p>
            I like speaking about things I've learned and I seek opportunities to offer mentoring.
            If you're interested in having me speak or participate at your next event,{' '}
            <a href="mailto:me@rafael.do">drop me a line</a>!
          </p>
        </article>
      </React.Fragment>
    )
  }

  Main = () => {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const { location } = this.props

    return (
      <main id="main" className="section main index">
        <Head title={siteTitle} description="Personal website." location={location} />
        <article className="hero">
          <h2>My name is Rafael Belliard and I make software–typically using JavaScript.</h2>
          <p>
            I develop beautiful frontend code, backend services and APIs. Furthermore, I love
            communication.{' '}
            {this.state.showDetails ? null : (
              <React.Fragment>
                <a href="#more" onClick={this.toggleDetails}>
                  More about me
                </a>
                .
              </React.Fragment>
            )}
          </p>
        </article>
        <this.Details />
      </main>
    )
  }
  render() {
    return <this.Main />
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
