import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";

import PostAuthor from "./PostAuthor";

import React from 'react'

const PostList = () => {
    const posts = useSelector(selectAllPosts)
    
    const renderedPosts = posts.map(post => (
        <article key={post.id} className="border p-4">
            <h3 className="text-xl text-white">{post.title}</h3>
            <p className="text-lg font-semibold">{post.content.substring(0, 100)}</p>

            <p className="text-xs font-bold">
                <PostAuthor userId= {post.userId}/>
            </p>
        </article>
    ))


  return (

        <section >
            <h2 className="text-center text-4xl text-white">POSTS</h2>
           <div className="mt-5 space-y-5">
           {renderedPosts}
           </div>
        </section>

  )
}

export default PostList