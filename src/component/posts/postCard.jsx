import React from "react";

import { Link } from "gatsby"

const PostCard = ({ data }) => {
    return (
        <Link to={"/" + data.title}>
            <li>
                {data.title}
            </li>
        </Link>
    )
}

export default PostCard;