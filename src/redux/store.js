import { configureStore } from '@reduxjs/toolkit'
import gymSliceReducer from './slice.js'
export const store = configureStore({
  reducer: {
    first: gymSliceReducer
  },
})