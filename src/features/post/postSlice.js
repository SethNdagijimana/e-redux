import { createSlice } from "@reduxjs/toolkit";

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
    name: 'post',
    initialState,
    reducers:{}
})

export default postSlice.reducer