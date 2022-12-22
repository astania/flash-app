import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPublicDecks = createAsyncThunk("decks/fetchDecks", () => {
    return fetch("/public-decks")
})