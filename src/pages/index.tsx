import * as React from 'react'
import { useState, useCallback, MouseEvent } from 'react'
import type { HeadFC } from 'gatsby'
import { Layout } from '../layout/layout'
import { SEO } from '../layout/seo'
import classNames from 'classnames'

export default function IndexPage() {
  const [showDetails, toggleDetails] = useState(false)

  const onToggleDetails = useCallback((e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    toggleDetails((prevValue) => !prevValue)
  }, [])

  return (
    <Layout>
      <main id="main" className="section main index">
        <article className="hero">
          <h2>My name is Rafael Belliard and I make software–typically using TypeScript.</h2>
          <p>
            I develop beautiful frontend code, backend services and APIs. Oh, and I love cooking.{' '}
            <a href="#more" onClick={onToggleDetails}>
              {showDetails ? 'Less' : 'More'} about me
            </a>
          </p>
        </article>
        <article id="more" className={classNames('details', showDetails && 'show')}>
          <p>
            I'm a software engineer from the Dominican Republic living in the Stockholm County of
            Sweden. I enjoy working with technologies like React.js, TypeScript, GraphQL, Serverless
            functions and web accessibility.
          </p>
          <p>
            I'm passionate about working smart and elevating the developer experience to facilitate
            building great user experiences that ship on time.
          </p>
        </article>
      </main>
    </Layout>
  )
}

export const Head: HeadFC = (props) => <SEO pathname={props.location.pathname} />
