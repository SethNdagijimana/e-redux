import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
        id:"1",
        title: "Redux Toolkit",
        content: "Redux toolkit tutorial"
    },

    {
        id:"2",
        title: "Slice....",
        content: "Redux slices......"
    }
]

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded:
        {
        reducer(state, action) {
            state.push(action.payload)
        },
        prepare(title, content, userId) {
            return {
                payload: {
                    id: nanoid(),
                    title,
                    content,
                    userId
                }
            }
        }
    }}
})


export const selectAllPosts = (state) => state.posts;

export const {postAdded} = postSlice.actions

export default postSlice.reducer