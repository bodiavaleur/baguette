import {createSlice} from "@reduxjs/toolkit";

interface CounterState {
  count: number;
}

const initialState: CounterState  ={
  count: 0
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    clear: (state) => {
      state.count = 0
    },
  },
})

export const {increment, decrement, clear} = counterSlice.actions

export default counterSlice
