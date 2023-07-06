import axios from 'axios';
import {
  addContact,
  deleteContact,
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

export const postContact =
  ({ name, phone }) =>
  async dispatch => {
    try {
      const response = await axios.post('/material', {
        name,
        phone,
      });
      dispatch(addContact(response.data));
    } catch (error) {
      dispatch(fetchingError(error.message));
    }
  };

export const deleteItem = id => async dispatch => {
  try {
    const response = await axios.delete(`/material/${id}`);
    dispatch(deleteContact(response.data.id));
  } catch (error) {
    dispatch(fetchingError(error.message));
  }
};
