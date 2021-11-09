module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "raelcode",
    description: ''
  },
  plugins: [
  'gatsby-plugin-postcss',
  `gatsby-plugin-typescript`,
  `gatsby-transformer-json`,
  `gatsby-transformer-sharp`, 
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `GatsbyJS`,
      short_name: `GatsbyJS`,
      start_url: `/`,
      background_color: `#f7f0eb`,
      theme_color: `#a2466c`,
      display: `standalone`,
      icon: `images/icon.png`,
      title: `raelcode`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `data`,
      path: `${__dirname}/data/`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/images/`,
    },
  },
],
};
