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
                        title
                        template
                    }
                }
            }
        }
    }
    `);

    if (errors) throw errors; // error

    data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.title,
            component: path.resolve(`./src/templates/${node.frontmatter.template}.template.jsx`),
            context: {
                id: node.id // add query variables to a page query
                // https://www.gatsbyjs.com/docs/how-to/querying-data/page-query/#how-to-add-query-variables-to-a-page-query
            },
        });
    })
};