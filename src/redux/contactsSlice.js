import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    filterContact(state, action) {
      return (state = action.payload);
    },
  },
});

export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

export const { filterContact } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
