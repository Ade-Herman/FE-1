import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import { productsApi } from "./features/products/productsApiSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
