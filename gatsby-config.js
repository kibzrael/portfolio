module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "portfolio",
  },
  plugins: [
    'gatsby-plugin-postcss',
  `gatsby-plugin-typescript`,
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `GatsbyJS`,
      short_name: `GatsbyJS`,
      start_url: `/`,
      background_color: `#f7f0eb`,
      theme_color: `#a2466c`,
      display: `standalone`,
      icon: `src/images/icon.png`,
    },
  },
],
};
