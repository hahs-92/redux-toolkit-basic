import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// nos crea custom hooks entre otras cosass
export const todosApi = createApi({
  reducerPath: "todos",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/todos",
    }),
  }),
});

export const { useGetTodosQuery } = todosApi;