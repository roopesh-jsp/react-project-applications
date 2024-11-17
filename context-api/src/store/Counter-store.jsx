import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    inc: (state) => {
      state.value = state.value + 1;
    },
    dec: (state) => {
      state.value--;
    },
    increaseByN: (state, payload) => {
      console.log(payload);

      state.value = state.value + Number(payload.payload);
    },
  },
});

export const { inc, dec, increaseByN } = counterSlice.actions;
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;
