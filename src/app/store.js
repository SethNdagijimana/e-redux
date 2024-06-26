import { configureStore } from "@reduxjs/toolkit";

import postReducer from "../features/post/postSlice"
// import counterReducer from "../features/counter/counterSlice"
import usersReducer from "../features/users/usersSlice"


export const store = configureStore({
    reducer: {
        // counter: counterReducer,
        posts: postReducer,
        users: usersReducer
     
    }
})