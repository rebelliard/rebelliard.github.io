import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Rafael Belliard - Software developer',
    author: 'Rafael Belliard',
    description: 'My personal site.',
    siteUrl: 'https://rafael.do/',
    twitterUsername: '@rebelliard',
    facebookProfileId: '100007638546934',
    facebookProfile: 'https://www.facebook.com/rebelliard',
    image: '/public/favicon/apple-icon.png',
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: '8wOUpHuPjtENukcgJPOptzz1IwTynlJtIl__TUXdTAQ',
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'rafael.do',
        short_name: 'rafael.do',
        start_url: '/',
        display: 'standalone',
        background_color: '#22297c',
        theme_color: '#22297c',
        description: "Rafael Belliard's personal website.",
        icon: './static/public/favicon/apple-icon.png',
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ],
}

export default config
