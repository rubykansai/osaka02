module.exports = {
  siteMetadata: {
    title: 'Osaka RubyKaigi 02',
    author: 'RubyKansai',
    description: 'Regional RubyKaigi at Osaka 02',
    keywords: 'Regional RubyKaigi Osaka RubyKansai Ruby',
  },
  pathPrefix: '/osaka02',
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'osaka-rubyKaigi-02',
        short_name: 'osaka02',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
