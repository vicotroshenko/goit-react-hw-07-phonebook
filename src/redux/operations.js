import axios from 'axios';
import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} from './contactsSlice';

axios.defaults.baseURL = 'https://64788052362560649a2de92c.mockapi.io';

export const fetchContacts = () => async dispatch => {
  try {
    dispatch(fetchingInProgress());
    const response = await axios.get('/material');
    dispatch(fetchingSuccess(response.data));
  } catch (error) {
    dispatch(fetchingError(error.message));
  }
};

export const addContact =
  ({ name, phone }) =>
  async dispatch => {
    try {
      dispatch(fetchingInProgress());
      await axios.post('/material', {
        name,
        phone,
      });
      const response = await axios.get('/material');
      dispatch(fetchingSuccess(response.data));
    } catch (error) {
      dispatch(fetchingError(error.message));
    }
  };

export const deleteContact = id => async dispatch => {
  try {
    dispatch(fetchingInProgress());

    await axios.delete(`/material/${id}`);
    const response = await axios.get('/material');

    dispatch(fetchingSuccess(response.data));
  } catch (error) {
    dispatch(fetchingError(error.message));
  }
};
