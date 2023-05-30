import React from "react"
import { graphql, navigate } from 'gatsby'

import Master from "../templates/master.template"

const IndexPage = ({ data }) => {
  if (process.env.REACT_APP_MAIN_ABOUT)
    return <Master data={data} />

  // not about display 
  navigate("/posts");
}

// get 'about-page id' in qurey
export const query = graphql`
query {
  markdownRemark(frontmatter: {title: {eq: "about"}}) {
    html
    frontmatter {
      title
      home
    }
  }
}
`

export default IndexPage



