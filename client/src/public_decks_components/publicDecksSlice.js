import { createAsyncThunk, createSlice, createEntityAdapter } from "@reduxjs/toolkit";

// const decksAdapter = createEntityAdapter()

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
      console.log("deck added payload", action.payload)
      state.entities.push(action.payload)
    },
    // deckUpdated: decksAdapter.upsertOne
    deckUpdated(state, action) {
      console.log("deck updated payload", action.payload.deckInfo.id)
      let targetedDeck = state.entities.find((deck) => deck.id === action.payload.deckInfo.id);
      console.log("targeted deck", targetedDeck)
      targetedDeck = action.payload

    }
    ,
    deckRemoved(state, action) {
      console.log("deck removed payload", action.payload)
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