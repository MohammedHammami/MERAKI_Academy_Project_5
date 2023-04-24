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
    },updatePost : (state, action)=>{
        state.post.map((post, i)=>{
            if(post.id == action.payload){
                return {}
            }
        })
    }
  },
});

export const { setPost, deletePost } = postSlice.actions;
export default postSlice.reducers;
