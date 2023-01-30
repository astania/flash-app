import { createAsyncThunk, createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { userUpdated } from "../profile_components/usersSlice";

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
      state.entities.push(action.payload)
    },
    // deckUpdated: decksAdapter.upsertOne
    deckUpdated(state, action) {
      let updatedDecks = state.entities.map((deck) => deck.id === action.payload.deckInfo.id ? action.payload.deckInfo : deck);
      state.entities = updatedDecks

    }
    ,
    deckRemoved(state, action) {
      const index = state.entities.findIndex((deck) => deck.id === action.payload);
      state.entities.splice(index, 1);
    },
    deckSaved(state, action) {
      // receives deck object and user object
      console.log("payload", action.payload)
      const updatedDecks = state.entities.map(deck => deck.id === action.payload.deck.id ? action.payload.deck : deck)
      // console.log("updatedDecks in slice",updatedDecks)
      state.entities = updatedDecks
      console.log("did these get updated?", state.entities)
    }
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

export const { deckAdded, deckUpdated, deckRemoved, deckSaved } = decksSlice.actions

export default decksSlice.reducer