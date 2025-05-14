import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
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
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
    },
  },
});

export const { setUser, setDoctors, removeUser } = userSlice.actions;

export default userSlice.reducer;
