import React from "react"
import { graphql } from "gatsby"

import Layout from "../component/layout/layout";
import PostCard from "../component/posts/postCard";

const Posts = ({ data }) => {
  const { allMarkdownRemark: { edges } } = data;
  return (
    <Layout>
      <ul >
        {edges.map((edge) => (
          <PostCard data={edge.node.frontmatter}/>
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