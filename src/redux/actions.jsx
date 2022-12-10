import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

// const addContact = {
//     type: 'contacts/addContact',
//     payload: {
//         id: nanoid(),
//         name: 'User name',
//         number: 'Phone number',
//     }
// }

// const deleteContact = {
//     type: 'contacts/deleteContact',
//     payload: 'Contact Id',
// };

// const setValueFilter = {
//     type: 'filter/setValueFilter',
//     payload: 'Filter value',
// };

// ======================================================

// export const addContact = (name, number) => {
//     return {
//         type: 'contacts/addContact',
//         payload: {
//             id: nanoid(),
//             name,
//             number,
//         },
//     };
// };

// export const deleteContact = contactId => {
//     return {
//         type: 'contacts/deleteContact',
//         payload: contactId,
//     };
// };

// export const setValueFilter = value => {
//     return {
//         type: 'filter/setValueFilter',
//         payload: value,
//     };
// };

export const addContact = createAction(
  'contacts/addContact',
  (name, number) => {
    return {
      payload: {
        id: nanoid(),
        name,
        number,
      },
    };
  }
);
export const deleteContact = createAction('contacts/deleteContact');
export const setValueFilter = createAction('filter/setValueFilter');
