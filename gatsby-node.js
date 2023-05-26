const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const { data, errors } = await graphql(`
    {
        allMarkdownRemark {
            edges {
                node {
                    html
                    frontmatter {
                        title
                    }
                }
            }
        }
    }
    `);

    if (errors) throw errors; // error
    /*
        @params path : routing
        @params path : template
        @params contxt : props
    */
    data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.title,
            component: path.resolve('./src/templates/master.template.jsx'),
            context: {},
        });
    })
};