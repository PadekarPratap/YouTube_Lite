import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isSidebarOpen: false,
    query: 'new'
}

export const youtubeSlice = createSlice({
    name: 'youtube',
    initialState,
    reducers: {
        CHANGE_SIDEBAR: (state) =>{
            state.isSidebarOpen = !state.isSidebarOpen
        },
        UPDATE_QUERY: (state, action) =>{
            state.query = action.payload
        }
    }

})


export const {CHANGE_SIDEBAR, UPDATE_QUERY} = youtubeSlice.actions
export default youtubeSlice.reducer 