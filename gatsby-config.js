const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: "Peru Tour",
    description:
      "Explore life-changing tours in the beautiful country of Peru. Break out of your daily routine and experience something special!",
    author: "cooperda",
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
  ],
}
