module.exports = {
  siteMetadata: {
    title: `Gatsby Crash Course`,
    description: `This is a sample website for the Gatsby crash course.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-catch-links',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    'gatsby-transformer-remark',
  ],
}
