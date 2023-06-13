import React from "react";

import { Link } from "gatsby"

const PostCard = ({ node }) => {
    const { frontmatter, excerpt } = node;
    return (
        <li className="post-card">
            <Link to={"/" + frontmatter.title}>
                <div className='post-card-title'>{frontmatter.title}</div>
                <p className='post-card-description'>{excerpt}</p>
                <div className='post-card-info'>
                    <div className='post-card-info-created'>{frontmatter.created}</div>
                    <div className='post-card-info-categories'>{frontmatter.category}</div>
                </div>
            </Link>
        </li>
    )
}

export default PostCard;