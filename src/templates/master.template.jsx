import React from "react"
import { graphql } from "gatsby"

import Layout from "../component/commonLayout/layout";

import "../../styles.css"

// md - static_page template
const Master = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter: { title } } = markdownRemark;
  return (
    <Layout>
      
      {/* this parent className is blog-main */}
      {/* change className : md-container or post-container */}
      <div
        className={title === 'about' ? 'md-container' : 'post-container'}
        dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
      />

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