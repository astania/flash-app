// import { v4 as uuid } from "uuid";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk("users/fetchCurrentUser", () => {
    return fetch("/me")
      .then((response) => response.json())
      .then((data) => data);
  });

const initialState = {
    entities: [],
    status: "idle"
}

const usersSlice = createSlice({
    name: "users", 
    initialState,
    reducers: {
        userAdded(state, action){
            state.entities.push(action.payload)
        },
        userUpdated(state, action){
            const user = state.entities.find((user) => user.id = action.payload.id)
            user.url = action.payload.url
        },
    },
    // extraReducers: {
    //     // handle async actions: pending, fulfilled, rejected (for errors)
    //     [fetchUsers.pending](state) {
    //       state.status = "loading";
    //     },
    //     [fetchUsers.fulfilled](state, action) {
    //       state.entities = action.payload;
    //       state.status = "idle";
    //     },
    //   },
})

export const { userAdded, userUpdated } = usersSlice.actions

export default usersSlice.reducer