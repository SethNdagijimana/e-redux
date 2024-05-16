import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";


import { postAdded } from "./postSlice";

import { selectAllUsers } from "../users/usersSlice";



import React from 'react'

const AddPostForm = () => {


    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')

    const users = useSelector(selectAllUsers)

    const onTitleChange = e => setTitle(e.target.value)
    const onContentChanged = e => setContent (e.target.value)
    const onAuthorChanged = e => setUserId (e.target.value)



    const dispatch = useDispatch();

    const onSavePostClicked = () => {
        if(title && content){
            dispatch(
                postAdded(
                    title,
                    content,
                    userId
                )
            )
            setTitle('')
            setContent('')
        }

    }

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    const usersOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

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
                    className="mt-2 p-1 w-full"
                />
               </div>

                <div>
                    <label htmlFor="postAuthor" className="text-xl text-white">Author</label>
                   <div>
                   <select id="postAuthor" value={userId} onChange={onAuthorChanged} className="w-full mt-1">
                        <option value=""></option>
                        {usersOptions}
                    </select>
                   </div>
                </div>
               <div>
               <label htmlFor="postContent" className="text-xl text-white">Content:</label>

                <textarea
                   id="postContent"
                   name="postContent"
                   value={content}
                   onChange={onContentChanged}
                   className="mt-2 p-1 w-full"
                />
               </div>

                <button 
                    onClick={onSavePostClicked}
                    type="button"
                    className={`w-full text-white rounded h-14 ${canSave ? 'bg-black' : 'bg-gray-200 text-black'}`}
                    disabled={!canSave}
                    >
                        Save Post
                    </button>
            </form>
        </section>
  )
}

export default AddPostForm