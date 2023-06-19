import React from "react";

const PostCardContent = ({ frontmatter, excerpt }) => {
  const arrTags = frontmatter.tags.split(',');

  return (
    <div>
      <p className="title">{frontmatter.title}</p>
      <p className="description">{excerpt}</p>
      {
        arrTags.map((item, i)=> (
          <span className="tag" key={`tag-${item}-${i}`}>
            {'#'+ item.trim()}
          </span>
        ))
      }
    </div>
  );
}

export default PostCardContent;