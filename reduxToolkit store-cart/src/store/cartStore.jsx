import { createSlice, configureStore } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    onAdd(state, action) {
      const currIndex = state.items.findIndex(
        (el) => el.id === action.payload.id
      );

      if (currIndex > -1) {
        // add quantity
        state.items[currIndex] = {
          ...state.items[currIndex],
          quantity: state.items[currIndex].quantity + 1,
          total:
            state.items[currIndex].price *
            (state.items[currIndex].quantity + 1),
        };
      } else {
        // new entry
        action.payload = {
          ...action.payload,
          quantity: 1,
          total: action.payload.price,
        };

        state.items.push(action.payload);
      }
    },
    onRemove(state, action) {
      const currIndex = state.items.findIndex(
        (el) => el.id === action.payload.id
      );
      if (state.items[currIndex].quantity < 2) {
        state.items.splice(currIndex, 1);
      } else {
        state.items[currIndex] = {
          ...state.items[currIndex],
          quantity: state.items[currIndex].quantity - 1,
          total:
            state.items[currIndex].price *
            (state.items[currIndex].quantity - 1),
        };
      }
    },
  },
});

const store = configureStore({
  reducer: cartSlice.reducer,
});
export const cartActions = cartSlice.actions;
export default store;
