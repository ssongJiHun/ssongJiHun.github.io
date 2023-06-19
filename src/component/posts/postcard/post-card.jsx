import React from "react";

import { Link } from "gatsby"

import PostCardThumbnail from "./post-card-thumbnail";
import PostCardContent from "./post-card-content.";

const PostCard = ({ node }) => {
    const { frontmatter, excerpt } = node;

    return (
        <li className="post-card" >
            <Link to={"/posts/" + frontmatter.title}>
                <PostCardThumbnail created={frontmatter.created} image={{}} />
                <PostCardContent frontmatter={frontmatter} excerpt={excerpt} />
            </Link>
        </li>
    )
}

export default PostCard;