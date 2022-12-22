import { v4 as uuid } from "uuid";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



const usersSlice = createSlice({
    name: "users", 
    initialState: {
        entities: []
    },
    reducers: {
        userAdded(state, action){
            state.entities.push({

            })
        }
    }
})