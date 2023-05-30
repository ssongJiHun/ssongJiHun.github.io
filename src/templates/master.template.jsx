import React from "react"

import { graphql } from "gatsby"

import Layout from "../component/commonLayout/Layout";

const Master = ({ data }) => {
  const { markdownRemark } = data;

  return (
    <Layout>
      <div id='blog-container' dangerouslySetInnerHTML={{ __html: markdownRemark.html }}></div>
    </Layout>
  )
}

export const query = graphql`
query($id: String!) {
  markdownRemark(id: {eq: $id}) {
    html
    frontmatter {
      title
    }
  }
}
`

export default Master