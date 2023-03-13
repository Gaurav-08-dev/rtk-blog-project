import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";

import React from 'react'

const PostsList = () => {

    const posts = useSelector(selectAllPosts)

    const orderedPost=posts.slice().sort((a,b) => b.date.localeCompare(a.date))

    const renderedPosts=orderedPost.map(post=>(
        <article key={post.title}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0,100)}</p>
            <p className="postCredit">
                <PostAuthor userId={post.userId}/>
            </p>
            <p><TimeAgo timeStamp={post.date}/></p>
        </article>
    ))
    return (
        <section>
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )
}

export default PostsList