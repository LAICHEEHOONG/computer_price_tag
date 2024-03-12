import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  inputData: {}
}

export const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    updateInputData: (state, action) => {
      state.inputData = action.payload
    }
  },
})

export const { increment, decrement, incrementByAmount, updateInputData } = inputSlice.actions

export default inputSlice.reducer