import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchSubjects = createAsyncThunk("subjects/fetchSubjects", () => {
    return fetch("/subjects")
      .then((response) => response.json())
      .then((data) => data);
  });

const initialState = {
    entities: [],
    status: "idle"
}

const subjectsSlice = createSlice({
    name: "subjects", 
    initialState,
    reducers: {
        subjectAdded(state, action){
            state.entities.push(action.payload)
        },
        subjectUpdated(state, action){
            const subject = state.entities.find((subject) => subject.id = action.payload.id)
            subject.name = action.payload.name
        },
    },
    extraReducers: {
        // handle async actions: pending, fulfilled, rejected (for errors)
        [fetchSubjects.pending](state) {
          state.status = "loading";
        },
        [fetchSubjects.fulfilled](state, action) {
          state.entities = action.payload;
          state.status = "idle";
        },
      },
})

export const { subjectAdded, subjectUpdated } = subjectsSlice.actions

export default subjectsSlice.reducer