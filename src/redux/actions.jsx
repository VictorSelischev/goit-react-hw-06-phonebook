import { nanoid } from 'nanoid';

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

export const addContact = (name, number) => {
    return {
        type: 'contacts/addContact',
        payload: {
            id: nanoid(),
            name,
            number,
        },
    };
};

export const deleteContact = contactId => {
    return {
        type: 'contacts/deleteContact',
        payload: contactId,
    };
};

export const setValueFilter = value => {
    return {
        type: 'filter/setValueFilter',
        payload: value,
    };
};