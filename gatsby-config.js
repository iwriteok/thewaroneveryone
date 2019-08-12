module.exports = {
  siteMetadata: {
    title: `The War on Everyone`,
    description: `The War on Everyone is a 5-part audiobook by Robert Evans. It's a complete history of the ideas, the tactics and- of course- the bastards who built the framework for the current surge in far-right terror we're all living with today. Timothy McVeigh, the Tree of Life Synagogue Shooter, Anders Breivik, Dylan Roof  and dozens of other mass-killers are all pieces of the same, sinister plot.  The actions of a few men, decades ago, crafted this engine of death, and today it's manifested as a War on Everyone.`,
    author: `Robert Evans`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: 'src/images/favicon.png'        
      }
    }
  ],
}
