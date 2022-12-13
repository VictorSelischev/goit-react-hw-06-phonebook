import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  filter: ''
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    filterReducer(state, action) {
      console.log(state);
      state.filter = action.payload;
      return state;
    },
  },
});

export const { setValueFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
