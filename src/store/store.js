import { configureStore } from "@reduxjs/toolkit";
//reducers
import { counterSlice } from "./slices/counter";
import { pokemonSlice } from "./slices/pokemon";
//RTK
import { todosApi } from "./apis/todosApi";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer,

    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
});
