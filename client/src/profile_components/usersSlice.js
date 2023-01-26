// import { v4 as uuid } from "uuid";
import { createAsyncThunk, createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const userAdapter = createEntityAdapter()

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
            // console.log("action payload in userAdded", action.payload)
            // state.user.entities.push(action.payload)
            console.log("in userAdded", state.user)

        },
        // userUpdated: userAdapter.upsertOne
        userUpdated(state, action){
            // const user = state.entities
            // console.log("user in slice. Was it found?", user)
            // console.log("payload", action.payload)
            // user.decks.push(action.payload)
        }
        ,
    },
    extraReducers: {
        // handle async actions: pending, fulfilled, rejected (for errors)
        [fetchUser.pending](state) {
          state.status = "loading";
        },
        [fetchUser.fulfilled](state, action) {
          state.entities = action.payload;
          state.status = "idle";
        },
      },
})

export const { userAdded, userUpdated } = usersSlice.actions

export default usersSlice.reducer