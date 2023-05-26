import React from "react"
import { graphql } from "gatsby"

import TaTableOfContents from "../Component/TableOfContents ";

import Article from "./article.template";

const Master = ({ data }) => {
  const { markdownRemark } = data;

  return (
    <main id='blog-container'>
      <title id='blog-title'>{markdownRemark.frontmatter.title}</title>

      {/* container heder */}

      {/*  About, PostList, PostItem */}

      {/* container Fooer */}
     
    </main>
  )
}

export const query = graphql`
  query {
    markdownRemark(frontmatter: {title: {eq: "about1"}}) {
      tableOfContents
      frontmatter {
        title
      }
      html
    }
  }
`

export default Master