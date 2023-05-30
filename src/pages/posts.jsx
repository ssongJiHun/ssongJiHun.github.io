import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../component/commonLayout/Layout";

const Posts = ({ data }) => {
    const { allMarkdownRemark: { edges } } = data;
    return (
        <Layout>
            <ul>
                {edges.map((edge) => (
                    <li>
                        <Link to={"/" + edge.node.frontmatter.title}>{edge.node.frontmatter.title}</Link>
                    </li>
                ))}
            </ul>
        </Layout>
    )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
  }
`

export default Posts;