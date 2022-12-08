// const initialState = {
//   contacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   filter: '',
// };

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const filterInitialState = '';

const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      return [action.payload, ...state];
    case 'contacts/deleteContact':
      return state.filter(contact => contact.id !== action.payload);
    default:
      return state;
  }
};

const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case 'filter/setValueFilter':
      return action.payload;
    default:
      return state;
  }
};

// export const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'contacts/addContact':
//       return { ...state, contacts: [...state.contacts, action.payload] };
//     case 'contacts/deleteContact':
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload
//         ),
//       };
//     case 'filter/setValueFilter':
//       return { ...state, filter: action.payload };
//     default:
//       return state;
//   }
// };

export const rootReducer = (state = {}, action) => {
  return {
    contacts: contactsReducer(state.contacts, action),
    filter: filterReducer(state.filter, action),
  };
};
