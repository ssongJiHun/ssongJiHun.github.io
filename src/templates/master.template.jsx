import React from "react"
import { graphql } from "gatsby"



const Master = ({ data }) => {
  const { markdownRemark } = data;

  return (
    <main id='blog-container'>
      <title id='blog-title'>{markdownRemark.frontmatter.title}</title>

      {/* container heder */}


      {/*  About, PostList, PostItem */}
      <div id='blog-id' dangerouslySetInnerHTML={{ __html: markdownRemark.html }}></div>

      {/* container Fooer */}

    </main>
  )
}

export const query = graphql`
query($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
      tableOfContents
      frontmatter {
        title
      }
      html
    }
  }
`

export default Master