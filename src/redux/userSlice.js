import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    user_add: (state) => {
    },
    user_delete: (state) => {
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})