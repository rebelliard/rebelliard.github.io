import * as React from 'react'
import type { HeadFC } from 'gatsby'
import { Layout } from '../layout/layout'
import { SEO } from '../layout/seo'

export default function IndexPage() {
  return (
    <Layout>
      <main id="main" className="section main index">
        <article className="hero">
          <h2>My name is Rafael Belliard and I make software–typically using TypeScript.</h2>
          <p>
            I develop beautiful frontend code, backend services and APIs. Oh, and I love cooking.
          </p>
        </article>
      </main>
    </Layout>
  )
}

export const Head: HeadFC = (props) => <SEO pathname={props.location.pathname} />
