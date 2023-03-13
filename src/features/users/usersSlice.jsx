import { createSlice } from "@reduxjs/toolkit";

const initialState=[
    {id:0,name:'a'},
    {id:1,name:'b'},
    {id:2,name:'c'}
]

const userSlice= createSlice({
    name:"users",
    initialState,
    reducers:{
        
    }
})

export const selectAllUsers=(state)=>state.users;
export default userSlice.reducer