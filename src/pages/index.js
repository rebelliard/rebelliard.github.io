import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Head from '../components/Head'

class BlogIndex extends React.Component {
  state = {}

  componentDidMount() {
    this.setState({
      showDetails: window.location.hash === '#more',
    })
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
            I live in the Dominican Republic and I enjoy working
            with things like Node.js, React.js,
            Webpack, Gulp, GraphQL, Firebase, PostgreSQL, Jest,
            and Serverless.
          </p>

          <p>
            I'm passionate about working smart and elevating the
            developer experience, to facilitate building great user
            experiences that ship on time.
          </p>

          <p>
            I occassionally share my thoughts on{' '}
            <Link to={'/blog/'}>my blog</Link> and{' '}
            <Link to={'https://twitter.com/rebelliard'}>tweet</Link>.
          </p>
        </article>
        <article className="detail">
          <h3>
            Currently working on
          </h3>
          <ul>
            <li>
              Secret stuff at{' '}
              <a href="https://vivial.net/"
                  target="_blank"
                  rel="noopener noreferrer">Vivial</a> (day job).
            </li>
            <li>
              A synced video-watching app for long-distance partners.
            </li>
          </ul>
        </article>
        <article className="detail">
          <h3>
            Trying to do more of
          </h3>
          <p>
            I like speaking about things I've learned and I seek opportunities
            to offer mentoring. My last talk was on{' '}
            <a
                href="https://www.linkedin.com/pulse/python-dominicana-059-django-migrations-rafael-e-belliard"
                target="_blank"
                rel="noopener noreferrer">Django Migrations</a>,
            and I was a coach for{' '}
            <a
                href="https://djangogirls.org/santodomingo1/"
                target="_blank"
                rel="noopener noreferrer">Django Girls Santo Domingo</a>.
            If you're interested in having me speak or participate at your next event,{' '}
            <a
                href="mailto:me@rafael.do">drop me a line</a>!
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
        <Head
          title={siteTitle}
          description="Personal website."
          location={location}/>
        <article className="hero">
          <h2>
            My name is Rafael Belliard and I make
            software–typically using JavaScript.
          </h2>
          <p>
            I develop software architectures, backend services,
            frontend code, APIs and databases.{' '}
            {this.state.showDetails
              ? null
              : <a href="#more" onClick={this.toggleDetails}>More about me.</a>
            }
          </p>
        </article>
        <this.Details></this.Details>
      </main>
    )
  }
  render() {
    return (
      <this.Main></this.Main>
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
