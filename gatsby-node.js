const path = require(`path`);

exports.createSchemaCustomization = ({ actions }) => {
    const {createTypes} = actions;

    const typeDefs = `
        type MarkdownRemark implements Node {
            frontmatter : Frontmatter
        }
        type Frontmatter {
            template : String!
            visible : Boolean!
            title : String
            path : String
            thumbnail : String
            category : String
            tags : String
            created : String
        }
    `
    createTypes(typeDefs);
};

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
            path: frontmatter.path || `${parent.relativeDirectory}/${frontmatter.title}`, // menu partiallyActive, active
            component: path.resolve(`./src/templates/${frontmatter.template}.template.jsx`),
            context: {
                id: id // add query variables to a page query
            },
        });
    })
};