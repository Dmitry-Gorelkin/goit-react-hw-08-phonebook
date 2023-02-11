import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    addFilter: (_, actions) => actions.payload,
  },
});

export const { addFilter } = filterSlice.actions;
export const filterReducers = filterSlice.reducer;
