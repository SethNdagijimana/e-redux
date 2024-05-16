import { useState } from "react";

import { useDispatch } from "react-redux";


import { postAdded } from "./postSlice";



import React from 'react'

const AddPostForm = () => {


    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const onTitleChange = e => setTitle(e.target.value)
    const onContentChanged = e => setContent (e.target.value)

    const dispatch = useDispatch();

    const onSavePostClicked = () => {
        if(title && content){
            dispatch(
                postAdded(
                    title,
                    content
                )
            )
            setTitle('')
            setContent('')
        }

    }

  return (
        <section className="">
            <h2 className="text-center text-2xl text-white">Add a New Post</h2>
            <form className="mt-8 border p-2 space-y-2">
               <div>
               <label htmlFor="postTitle" className="text-xl text-white">Post Title:</label>
                <input 
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChange}
                    className="mt-2 p-1"
                />
               </div>

               <div>
               <label htmlFor="postContent" className="text-xl text-white">Content:</label>

                <textarea
                   id="postContent"
                   name="postContent"
                   value={content}
                   onChange={onContentChanged}
                   className="mt-2 p-1"
                />
               </div>

                <button 
                    onClick={onSavePostClicked}
                    type="button"
                    className="bg-black w-full text-white rounded h-14"
                    >
                        Save Post
                    </button>
            </form>
        </section>
  )
}

export default AddPostForm