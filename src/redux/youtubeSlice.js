import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isSidebarOpen: false,
    query: 'new',
    searchQuery: ''
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
        },
        SET_SEARCH_QUERY: (state, action) =>{
            state.searchQuery = action.payload
        }
    }

})


export const {CHANGE_SIDEBAR, UPDATE_QUERY, SET_SEARCH_QUERY} = youtubeSlice.actions
export default youtubeSlice.reducer 