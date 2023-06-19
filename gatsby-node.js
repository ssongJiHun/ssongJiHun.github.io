const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const { data, errors } = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              path
              title
              template
            }
            parent {
              ... on File {
                relativeDirectory
              }
            }
          }
        } 
      }
    }`);

  if (errors) throw errors; // error

  data.allMarkdownRemark.edges.forEach(({ node: { id, frontmatter, parent } }) => {
    createPage({
      path: frontmatter.path || `${parent.relativeDirectory}/${frontmatter.title}`,
      component: path.resolve(`./src/templates/${frontmatter.template}.template.jsx`),
      context: {
        id: id // add query variables to a page query
      },
    });
  })
};