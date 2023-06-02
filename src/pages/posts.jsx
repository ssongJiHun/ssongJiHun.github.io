import React from "react"
import { graphql } from "gatsby"

import Layout from "../component/layout/layout";
import PostCard from "../component/posts/postCard";

const Posts = ({ data }) => {
  const { allMarkdownRemark: { edges } } = data;
  return (
    <Layout>
      <ul >
        {edges.map((edge) => {
          return <PostCard node={edge.node} />
        })}
      </ul>
    </Layout>
  )
}

// get only posts
export const query = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {visible: {eq: true}, menu: {eq: "posts"}}}) {
      edges {
        node {
          rawMarkdownBody
          frontmatter {
            title
          }
        }
      }
    }
  }
`

export default Posts;