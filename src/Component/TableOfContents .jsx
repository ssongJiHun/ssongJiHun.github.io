import React from 'react'

import './TableOfContents .css'

const TaTableOfContents = ({ html }) => {
    return (
        <div id='blog-toc' dangerouslySetInnerHTML={{ __html: html }} />
    )
}

export default TaTableOfContents;