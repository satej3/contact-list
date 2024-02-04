// src/actions/contactActions.js

export const fetchContacts = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      dispatch({
        type: 'FETCH_CONTACTS_SUCCESS',
        payload: data
      });
    } catch (error) {
      dispatch({
        type: 'FETCH_CONTACTS_ERROR',
        payload: error.message
      });
    }
  };
};

export const addContact = (contact) => {
  return async (dispatch) => {
    try {
      // Make POST request to the API (dummy call)
      // Replace 'https://jsonplaceholder.typicode.com/users' with your actual API endpoint
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const data = await response.json();
      dispatch({
        type: 'ADD_CONTACT',
        payload: data
      });
    } catch (error) {
      // Handle error
    }
  };
};

export const updateContact = (contact) => {
  return async (dispatch) => {
    try {
      // Make PUT request to the API (dummy call)
      // Replace 'https://jsonplaceholder.typicode.com/users' with your actual API endpoint
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${contact.id}`, {
        method: 'PUT',
        body: JSON.stringify(contact),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const data = await response.json();
      dispatch({
        type: 'UPDATE_CONTACT',
        payload: data
      });
    } catch (error) {
      // Handle error
    }
  };
};

export const deleteContact = (id) => {
  return async (dispatch) => {
    try {
      // Make DELETE request to the API (dummy call)
      // Replace 'https://jsonplaceholder.typicode.com/users' with your actual API endpoint
      await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'DELETE',
      });
      dispatch({
        type: 'DELETE_CONTACT',
        payload: id
      });
    } catch (error) {
      // Handle error
    }
  };
};
