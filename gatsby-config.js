require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  pathPrefix: "/gatsby-react-bootstrap-starter",
  siteMetadata: {
    title: `Gatsby React Bootstrap AND SHOPIFY! 🤩 Starter`,
    description: `A starter that includes react-bootstrap and react-icons, along with SASS compilation, AND OMG SHOPIFY!!!`,
    author: `A. Crego`,
    logos: `./resources/shopify+gatsby.png`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-react-bootstrap`,
        short_name: `react-bootstrap`,
        start_url: `/`,
        background_color: `#20232a`,
        theme_color: `#20232a`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-source-shopify`,
      options: {
        shopName: process.env.GATSBY_SHOP_NAME,
        accessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
        verbose: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
