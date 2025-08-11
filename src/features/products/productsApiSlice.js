import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../app/axiosBaseQuery";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: axiosBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
  }),

  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({ url: "/products", method: "GET" }),
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
