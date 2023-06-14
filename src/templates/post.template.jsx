import React from "react"

import { graphql } from "gatsby"

import Layout from "../component/layout/layout"
import MarkdownHTML from "../component/markdown/markdown"

// md - static_page template
const Post = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter } = markdownRemark;

  return (
    <Layout>
      {/* posts title */}
      <p>{frontmatter.category}</p>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.created}</p>
      <hr style={{ marginTop: '2rem', marginBottom: '2rem' }}></hr>

      <MarkdownHTML dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
      <div className="table-of-contents" dangerouslySetInnerHTML={{ __html: markdownRemark.tableOfContents }} />

      {/* posts botton */}

    </Layout>
  )
}

export const query = graphql`
query($id: String!) {
  markdownRemark(id: {eq: $id}) {
    html
    tableOfContents
    frontmatter {
      title
      category
      created
    }
  }
}
`
export default Post