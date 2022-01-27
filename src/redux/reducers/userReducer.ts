import { createSlice } from "@reduxjs/toolkit";
export const Slice = createSlice({
  name: "user",
  initialState: {
    name: "",
    email: "",
    uid: "",
  },
  reducers: {
    setNameUsuario: (state, action) => {
      state.name = action.payload;
    },
    setEmailUsuario: (state, action) => {
      state.email = action.payload;
    },
    setUid: (state, action) => {
      state.uid = action.payload;
    },
    setLogOut: (state) => {
      return (state = { name: "", email: "", uid: "" });
    },
  },
});

export const { setNameUsuario, setEmailUsuario, setUid, setLogOut } =
  Slice.actions;

export default Slice.reducer;
