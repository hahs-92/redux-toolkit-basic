import { configureStore } from "@reduxjs/toolkit";
//reducers
import { counterSlice } from "./slices/counter";
import { pokemonSlice } from "./slices/pokemon";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer,
  },
});
