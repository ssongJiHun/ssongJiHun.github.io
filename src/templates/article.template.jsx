import React from 'react'

import TaTableOfContents from '../Component/TableOfContents ';

const Article = ({ children }) => {
    return (
        <div>
            {/* <TaTableOfContents html={markdownRemark.tableOfContents} /> */}

            {/* <div id='blog-id' dangerouslySetInnerHTML={{ __html: markdownRemark.html }}></div> */}
            {/* Article Header */}
            {children}
            {/* Article Poc */}
            {/* Article Footer */}
        </div>
    )
}

export default Article;