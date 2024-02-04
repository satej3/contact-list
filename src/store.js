// src/store.js

import { createStore, combineReducers, applyMiddleware } from 'redux';
import contactReducer from './redux/reducrers/contactReducer';
import {thunk} from 'redux-thunk'; // Import redux-thunk

const rootReducer = combineReducers({
  contacts: contactReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk)); // Apply thunk middleware

export default store;

