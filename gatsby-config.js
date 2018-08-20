module.exports = {
  siteMetadata: {
    title: 'Tahir\'s website',
    description: 'Complete course on web design and development built on React and Gatsby',
    keywords: 'react, gatsby, react course, react gatsby course, javasccript, static-site generators, design, development, learn'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '7shjukr760u4',
        accessToken: '31cd00a6dffaab045015d4aa19089ca63fe156901fe3542326f36bba4c3b5e95'
      }
    }
  ],
}
