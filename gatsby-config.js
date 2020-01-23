/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Old THE PLAID AGENCY`,
    subTitle: `Old TPA`,
    description: `Old The official website of THE PLAID AGENCY.`,
    author: `Old THE PLAID AGENCY`,
    siteUrl: `https://plaid-2020.netlify.com/`,
  },
  plugins: [
    /**
     *
     * Source Plugins
     *
     */
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },

    /**
     *
     * Functionality Plugins
     *
     */
    `gatsby-alias-imports`,
    // `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Playfair Display`,
            subsets: [`latin`],
            variants: [`700`],
          },
          {
            family: `Lato`,
            subsets: [`latin`],
            variants: [`400`, `400i`, `700`, `900`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-transition-link`,
      options: {
        layout: require.resolve(`./src/components/Layout/Layout`),
      },
    },
    // {
    //   resolve: `gatsby-plugin-layout`,
    //   options: {
    //     component: require.resolve(`./src/components/Layout/Layout`),
    //   },
    // },

    /**
     *
     * SEO Plugins
     *
     */
    `gatsby-plugin-sitemap`,
    // `gatsby-plugin-react-helmet`,
    `gatsby-plugin-react-helmet-async`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `THE PLAID AGENCY`,
        short_name: `THE PLAID AGENCY`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#ff671d`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/assets/favicon.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`, // MUST be after gatsby-plugin-manifest
  ],
}
