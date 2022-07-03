import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    incrementByAmount: (state, action) => {
      state.counter += action.payload;
    },
    incrementBy2: (state) => {
      state.counter += 2;
    },
  },
});

// Action creators are generated for each case reducer function
// estos action creators son generados a partir de los reducers, es decir no son
// lo mismo
export const { increment, decrement, incrementByAmount, incrementBy2 } =
  counterSlice.actions;

// export default counterSlice.reducer
