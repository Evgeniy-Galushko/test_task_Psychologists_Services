import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    favorites: [],
    db: [],
    name: null,
    email: null,
    token: null,
    id: null,
    isloading: false,
    error: null,
  },

  reducers: {
    setUser(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    setDoctors(state, action) {
      state.db = action.payload.db;
    },
    setFavoritesDb(state, action) {
      state.favorites = [...state.favorites, ...action.payload];
    },

    removeFromFavorites(state, action) {
      state.favorites = [...action.payload];
    },
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
    },
  },
});

export const {
  setUser,
  setDoctors,
  removeUser,
  setFavoritesDb,
  removeFromFavorites,
} = userSlice.actions;

export default userSlice.reducer;
