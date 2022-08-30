import { graphql, useStaticQuery } from 'gatsby'

interface SiteMetadata {
  title?: string
  description?: string
  author?: string
  twitterUsername?: string
  facebookProfile?: string
  facebookProfileId?: string
  image?: string
  siteUrl?: string
}

interface Site {
  site: {
    siteMetadata: SiteMetadata
  }
}

export function useSiteMetadata() {
  const data = useStaticQuery<Site>(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          twitterUsername
          facebookProfile
          facebookProfileId
          image
          siteUrl
        }
      }
    }
  `)
  return data.site.siteMetadata
}
