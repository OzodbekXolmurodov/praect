import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api"; // API'ni import qilish

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer, // API reducer'ni qo‘shish
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware), // API middleware'ni qo‘shish
});
