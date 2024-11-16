import "./Blogs.scss"

import React from "react"

type TBlogProps = {
    blog: string;
}

const Blogs: React.FC<TBlogProps> = ( {blog} ) => {
    return (
        <div>{blog}</div>
    )
}

export default Blogs;
