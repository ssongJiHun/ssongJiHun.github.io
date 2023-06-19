module.exports = {
  siteMetadata: {
    title: `blogs`,
    siteUrl: `https://ssongjihun.github.io/`
  },
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: 'gatsby-source-filesystem',
      options: { "name": "pages", "path": './src/markdown/' },
    },
    // `gatsby-plugin-image`,
    // `gatsby-transformer-sharp`,  // create graphQL node 
    // `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              removeAccents: true,
            },
          },
          {
            resolve: 'gatsby-remark-smartypants',
            options: {
              dashes: 'oldschool',
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
            },
          },
        ]
      }
    }
  ]
};