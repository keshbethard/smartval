module.exports = {
  siteMetadata: {
    title: `Smartval.nu`,
    description: `Hitta den bästa jämförseltjänsten efter dina behov.`,
    author: `@Smartval`,
    image: "src/images/smartval-cover.png",
    url: "https://www.smartval.nu"
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/smartval-favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `PT Sans`,
          'material icons',
          `400,700`
        ],
        display: 'swap'
      }
    }
  ],
  pathPrefix: "/smartval",
}
