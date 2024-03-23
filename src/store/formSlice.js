import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isHome: false,
  isLoading: false,
  dataForm: {},
};

const formSlice = createSlice({
  name: "formData",
  initialState,
  reducers: {
    addDataTosending: (state, action) => {
      state.dataForm = action.payload;
    },
  },
});

export const { addDataTosending } = formSlice.actions;

export default formSlice.reducer;
