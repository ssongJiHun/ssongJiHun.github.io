## Gatsby - my blog

### 초기 세팅 방법

``` text
 $ git clone
 
 $ npm install -g yarn
 
 $ cd [current-project]
 
 $ -- yarn set version berry 
 ```

### 1. 프로젝트 구성
    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package.json
    └── README.md

### 2. Gatsby 
  1. `gatsby-source-filesystem` 로 마크다운 파일을 읽는다.
  2. `gatsby-transformer-remark` 로 마크다운 파일을 해석한다.
  3. 해석된 데이터를 GraphQL로 가져져온다.
  4. 가져온 정보를 미리 설정한 템플릿에 배치한다.
  5. Gatsby의 createPageAPI를 사용하여 데이터와 템플릿을 정적 페이지 만든다.

### 2. MarkDown 파일 상단 옵션

``` text
---
# option in gobal
template : "" `default` | `post`
title: "" `URL`

# option in post 
category : ''
tags : '개발자, 테스트, 하하하'
created : '2023-06-13'
visible : true
 ```

