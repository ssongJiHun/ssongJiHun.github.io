import React from "react"
import { graphql } from 'gatsby'

import Master from "../templates/master.template"

const IndexPage = ({ data }) => {
  // render 'about page'
  return (
    <Master data={data} />
  )
}

// get 'about-page id' in qurey
export const query = graphql`
query {
  markdownRemark(frontmatter: {title: {eq: "about"}}) {
    html
    frontmatter {
      title
    }
  }
}
`

export default IndexPage

export const Head = () => <title>Home Page</title>

