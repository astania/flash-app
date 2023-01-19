
import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "./profile_components/usersSlice"
import publicDecksReducer from "./public_decks_components/publicDecksSlice"
import subjectsReducer from "./subject_components/subjectsSlice"

const store = configureStore({
  reducer: {
    user: usersReducer,
    decks: publicDecksReducer,
    subjects: subjectsReducer
  },
});

export default store;