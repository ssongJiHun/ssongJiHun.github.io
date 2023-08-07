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
      <span style={{ marginRight: '16px' }}>{frontmatter.category || '카테고리 없음'}</span>
      <span className="gray-color">{frontmatter.created.replaceAll('-', '.') || '날짜 없음'}</span>
      <h1 style={{ fontSize: '40px', marginBottom: '24px' }}>{frontmatter.title}</h1>

      {/* posts body */}
      <MarkdownHTML dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
      <div className="table-of-contents" dangerouslySetInnerHTML={{ __html: markdownRemark.tableOfContents }} />

      {/* posts botton */}
      <div style={{ display: 'flex', marginTop: '16px', gap : '10px' }}>
        <div className='flex-helf box-border-round prebtn'>
          이전
        </div>
        <div className='flex-helf box-border-round nextbtn'>
          다음
        </div>
      </div>

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