/* 
  1. `gatsby-source-filesystem` 로 마크다운 파일을 읽는다.
  2. `gatsby-transformer-remark` 로 마크다운 파일을 해석한다.
  3. 해석된 데이터를 GraphQL로 가져져온다.
  4. 가져온 정보를 미리 설정한 템플릿에 배치한다.
  5. Gatsby의 createPageAPI를 사용하여 데이터와 템플릿을 정적 페이지 만든다.
*/


module.exports = {
  siteMetadata: {
    title: `blogs`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: { "name": "abouts", "path": './src/abouts' },
    },
    "gatsby-transformer-remark"
  ]
};