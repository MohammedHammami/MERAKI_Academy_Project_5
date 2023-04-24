import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
  },
  reducers: {
    setPost: (state, action) => {
      state.posts = action.payload;
    },
    deletePost: (state, action) => {
      state.posts.forEach((post, i) => {
        if (post.id == action.payload) {
          state.posts.splice(i, 1);
        }
      });
    },
  },
});

export const { setPost, deletePost } = postSlice.actions;
export default postSlice.reducers;
