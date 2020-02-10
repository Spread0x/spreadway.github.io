module.exports = {
  siteMetadata: {
    title: 'Spread | AI powered freelance platform',
  },
  pathPrefix: "/spreadway.github.io",
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-tslint',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'spread0x-landing-page',
        short_name: 'spread-landing',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/apple-touch-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-13037685-7",
        head: true,
        respectDNT: true,
        cookieDomain: "spread0x.com",
      },
    },
    {
    resolve: `gatsby-plugin-google-tagmanager`,
    options: {
      id: "GTM-NGN9XJR",
      includeInDevelopment: false
    },
    }        
  ],
}
