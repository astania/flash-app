import { createAsyncThunk, createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const decksAdapter = createEntityAdapter()

export const fetchDecks = createAsyncThunk("decks/fetchDecks", () => {
  return fetch("/public_decks")
    .then((response) => response.json())
    .then((data) => data)
});

const initialState = {
  entities: [],
  status: "idle"
}

const decksSlice = createSlice({
  name: "decks",
  initialState,
  reducers: {
    deckAdded(state, action) {
      state.entities.push(action.payload)
    },
    deckUpdated: decksAdapter.upsertOne
    // deckUpdated(state, action) {
    //   const targetedDeck = state.entities.find((deck) => deck.id === action.payload.id);
    
    // }
    ,
    deckRemoved(state, action) {
      const index = state.entities.findIndex((deck) => deck.id === action.payload);
      state.entities.splice(index, 1);
    },
  },
  extraReducers: {
    // handle async actions: pending, fulfilled, rejected (for errors)
    [fetchDecks.pending](state) {
      state.status = "loading";
    },
    [fetchDecks.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = "idle";
    },
  },
})

export const { deckAdded, deckUpdated, deckRemoved } = decksSlice.actions

export default decksSlice.reducer