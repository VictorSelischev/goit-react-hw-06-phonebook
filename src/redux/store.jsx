// import { configureStore } from '@reduxjs/toolkit';
// import { contactsReducer } from './contactsSlice';
// import { filterReducer } from './filterSlice';

import { createStore } from 'redux';

const initialState = {
  contacts: [],
  filter: ""
}

const rootReducer = (state = initialState, action) => {
  return state
}

export const store = createStore(rootReducer);




// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filter: filterReducer,
//   },
// });
