import { createSlice } from "@reduxjs/toolkit";

export const MoodSlice = createSlice({
    name:'mood',
    initialState:{
        mood:'lightMood'
    },
    reducers:{
        changeMood:(state,action)=>{
            state.mood = 'darkMood';

        }
    }

})

export const {changeMood} = MoodSlice.actions
export default MoodSlice.reducers
