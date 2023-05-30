import React from "react"
import { graphql } from 'gatsby'

import Master from "../templates/master.template"

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Master data={data} />
  )
}

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

