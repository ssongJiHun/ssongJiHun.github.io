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

### 2. MD 파일 상단 옵션

``` text
---
# option in gobal
template : "" `default` | `post`
title: "" `URL`

# option in post 
category : ''
created : '2023-06-13'
visible : true
 ```

