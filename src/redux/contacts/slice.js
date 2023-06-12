import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContacts, deleteContacts } from './operations';

const initialState = {
  items: [],
  isLoadingFech: false,
  isLoading: false,
  error: null,
};

const handlePendingFechContacts = state => {
  state.isLoadingFech = true;
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejectedFechContacts = (state, action) => {
  state.isLoadingFech = false;
  state.error = action.payload;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePendingFechContacts)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoadingFech = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejectedFechContacts)
      .addCase(addContacts.pending, handlePending)
      .addCase(addContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContacts.rejected, handleRejected)
      .addCase(deleteContacts.pending, handlePending)
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          task => task.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContacts.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
