import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isSidebarOpen: false
}

export const youtubeSlice = createSlice({
    name: 'youtube',
    initialState,
    reducers: {
        CHANGE_SIDEBAR: (state) =>{
            state.isSidebarOpen = !state.isSidebarOpen
        }
    }

})


export const {CHANGE_SIDEBAR} = youtubeSlice.actions
export default youtubeSlice.reducer 