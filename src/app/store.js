import { configureStore } from "@reduxjs/toolkit";

import postReducer from "../features/post/postSlice"
// import counterReducer from "../features/counter/counterSlice"


export const store = configureStore({
    reducer: {
        // counter: counterReducer
        postReducer: postReducer
     
    }
})