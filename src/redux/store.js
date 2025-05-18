import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice.js";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const psychologistsPersistConfig = {
  key: "user",
  storage,

  whitelist: ["favorites", "token"],
};

const store = configureStore({
  reducer: {
    user: persistReducer(psychologistsPersistConfig, userReducer),
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
