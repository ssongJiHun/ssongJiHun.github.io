const path = require(`path`)
// Log out information after a build is done

exports.onCreateDevServer = ({ app }) => {
    app.get('/hello', function (req, res) {
        res.send('hello world')
    })
}

// // gatsby-node.js
// const path = require("path")

// exports.createPages = ({ actions, graphql }) => {
//   const { createPage } = actions

//   const blogPostTemplate = path.resolve(`./src/templates/post-template.jsx`)

//   return graphql(`
//     {
//       allMarkdownRemark(
//         sort: { order: DESC, fields: [frontmatter___date] }
//         limit: 1000
//       ) {
//         edges {
//           node {
//             frontmatter {
//               path
//             }
//           }
//         }
//       }
//     }
//   `).then(result => {
//     if (result.errors) {
//       return Promise.reject(result.errors)
//     }

//     result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//       createPage({
//         path: node.frontmatter.path,
//         component: blogPostTemplate,
//         context: {},
//       })
//     })
//   })
// }