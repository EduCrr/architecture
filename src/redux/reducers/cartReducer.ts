import { createSlice } from "@reduxjs/toolkit";
import { houseTypes } from "../../types/houseType";
const initialState: houseTypes[] = [];
export const Slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      let id = action.payload.id;
      let indexProduct = state.findIndex((item) => item.id === id);
      if (indexProduct > -1) {
        alert("já add");
      } else {
        state.push(action.payload);
      }
    },
    removeItemFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItemToCart, removeItemFromCart } = Slice.actions;

export default Slice.reducer;
