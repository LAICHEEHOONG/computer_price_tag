import { configureStore } from '@reduxjs/toolkit'
import inputReducer from '../features/input/inputSlice'

export const store = configureStore({
  reducer: {
    input: inputReducer
  },
})