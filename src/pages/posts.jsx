import React from "react"
import { graphql } from "gatsby"

import Layout from "../component/layout/layout";
import PostCard from "../component/posts/post_card/post-card";

const Posts = ({ data }) => {
  const { allMarkdownRemark: { edges } } = data;

  return (
    <Layout>
      {/* post category render */}

      {/* posts post-card render */}
      <ul className="post" >
        {edges.map((edge, i) => {
          return <PostCard key={'node' + i} node={edge.node} />
        })}
      </ul>
    </Layout>
  )
}

// get only posts
export const query = graphql`
  query {
    allMarkdownRemark(
      sort: {frontmatter: {created: DESC}}
      filter: {frontmatter: {visible: {eq: true}, title: {}}, fileAbsolutePath: {regex: "/posts/"}}
    ) {
      edges {
        node {
          excerpt(format: PLAIN, pruneLength: 10000, truncate: true)
          frontmatter {
            title
            created
            category
            tags
          }
        }
      }
    }
  }
`

export default Posts;