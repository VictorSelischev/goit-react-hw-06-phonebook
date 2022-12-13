import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    filterReducer(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setValueFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
