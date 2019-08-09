module.exports = {
  siteMetadata: {
    title: `The War on Everyone`,
    description: `The War on Everyone is a 5-part audiobook by Robert Evans.`,
    author: `@alanandroid`,
    siteUrl: `https://www.thewaroneveryone.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-144276814-1",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
