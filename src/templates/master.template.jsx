import React from "react"
import { graphql } from "gatsby"

import Layout from "../component/layout/layout"

import "../../styles.css"

// md - static_page template
const Master = ({ data }) => {
  const { markdownRemark } = data;
  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
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