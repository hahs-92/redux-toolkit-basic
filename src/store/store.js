import { configureStore } from '@reduxjs/toolkit'
//reducer
import {counterSlice  }  from './slices/counter'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  },
})
