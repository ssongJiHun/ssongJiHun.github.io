import React from "react";

import { Link } from "gatsby"

const PostCard = ({ node }) => {
    const { frontmatter, rawMarkdownBody } = node;
    return (
        <Link to={"/" + frontmatter.title}>
            <li>
                {frontmatter.title}
            </li>
        </Link>
    )
}

export default PostCard;