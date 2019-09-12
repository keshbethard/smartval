module.exports = {
  siteMetadata: {
    title: `Smartval.nu`,
    description: `Sveriges största samlingsplats för gratis jämförelsetjänster. Vi listar de som jämför: ✓ Lån ✓ Försäkringar ✓ Mat ✓ Elavtal ✓ Kreditkort ✓ Flygresor mm.`,
    author: `@Smartval`,
    image: "src/images/smartval-og.jpg",
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
        name: `Smartval`,
        short_name: `Smartval`,
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
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'sv'
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-92073965-4",
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-MLNC5XD",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
      },
    },
  ],
  pathPrefix: "/",
}
