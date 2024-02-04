// src/reducers/contactReducer.js

const initialState = {
  contacts: [],
  error: null
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CONTACTS_SUCCESS':
      return {
        ...state,
        contacts: action.payload,
        error: null
      };
    case 'FETCH_CONTACTS_ERROR':
      return {
        ...state,
        error: action.payload
      };
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
        error: null
      };
    case 'UPDATE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === action.payload.id ? action.payload : contact
        ),
        error: null
      };
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload),
        error: null
      };
    default:
      return state;
  }
};

export default contactReducer;
