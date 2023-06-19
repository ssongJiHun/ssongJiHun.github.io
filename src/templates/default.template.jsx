import React from "react"

import { graphql } from "gatsby"

import Layout from "../component/layout/layout"
import MarkdownHTML from "../component/markdown/markdown"

// md - static_page template
const AboutTemplate = ({ data }) => {
  const { markdownRemark } = data;

  return (
    <Layout>
      <MarkdownHTML dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
    </Layout>
  )
}

export const query = graphql`
query($id: String!) {
  markdownRemark(id: {eq: $id}) {
    html
  }
}
`

export default AboutTemplate