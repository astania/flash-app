
import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "./profile_components/usersSlice"
import publicDecksReducer from "./public_decks_components/publicDecksSlice"

const store = configureStore({
  reducer: {
    user: usersReducer,
    decks: publicDecksReducer,
  },
});

export default store;