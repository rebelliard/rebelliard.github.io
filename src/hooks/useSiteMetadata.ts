import { graphql, useStaticQuery } from 'gatsby'

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
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
