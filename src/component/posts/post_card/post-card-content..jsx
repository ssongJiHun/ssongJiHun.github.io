import React from "react";

const PostCardContent = ({ frontmatter, excerpt }) => {
    const arrTags = frontmatter.tags.split(',');

    return (
        <div className="content">
            <p className="title">{frontmatter.title}</p>
            <p className="description">{excerpt}</p>
            <div style={{overflow : 'hidden'}}>
                {
                    arrTags.map((item, i) => (
                        <span className='box-border-round tag' key={`tag-${item}-${i}`}>
                            {'#' + item.trim()}
                        </span>
                    ))
                }
            </div>
        </div>
    );
}

export default PostCardContent;