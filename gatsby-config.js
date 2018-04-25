module.exports = {
  siteMetadata: {
    title: 'Rafael Belliard - Software developer',
    author: 'Rafael Belliard',
    description: 'My personal site.',
    siteUrl: 'https://rafael.do/',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-117939300-1',
      },
    },
    `gatsby-plugin-feed`,
    {
      /**
       * Fix: twitter widget rendering is inconsistent.
       * @see https://github.com/gatsbyjs/gatsby/issues/1625#issuecomment-364644428
       */
      resolve: `gatsby-plugin-offline`,
      options: {
        navigateFallback: null,
        navigateFallbackWhitelist: [],
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-twitter`
  ],
}
