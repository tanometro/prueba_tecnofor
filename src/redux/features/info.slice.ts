import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   info: '',
   isActive: false,
}

export const infoSlice = createSlice({
    name: 'information',
    initialState,
    reducers: {
        activeDesactive: (state) => {
          state.isActive = !state.isActive;
        },
        setInputValue: (state, action) => {
          state.info = action.payload;
        },
      },
  });

export const {activeDesactive, setInputValue} = infoSlice.actions;

export default infoSlice.reducer;