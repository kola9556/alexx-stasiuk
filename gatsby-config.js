require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Alex Stasiuk`,
    description: `This is Alex Satsiuk frontend developer portfolio website.`,
    author: `Alex Stasiuk`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alex Stasiuk portfolio`,
        short_name: `AlexxStasiuk`,
        start_url: `/`,
        background_color: `#f0e8e8`,
        theme_color: `#f0e8e8`,
        display: `minimal-ui`,
        icon: `src/assets/images/logo.png`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-layout`,

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ['Ropa Sans:400,400i'],
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        // You can find your read-only API token under the Settings > API tokens
        // section of your administrative area:
        apiToken: process.env.API_DATO_CMS,
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
