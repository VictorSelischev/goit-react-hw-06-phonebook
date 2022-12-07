// import { nanoid } from 'nanoid';
const { nanoid } = require("@reduxjs/toolkit")

- Добавить новый контакт с именем и телефоном, введенные пользователем;
- Удалить контакт из телефонной книги;
- Обновить значение фильтра телефонной книги.

const addContact = {
    type: 'contacts/addContact',
    payload: {
        id: nanoid(),
        name: 'User name',
        number: 'Phone number',
    }
}

const deleteContact = {
    type: 'contacts/deleteContact',
    payload: 'Contact Id',
}

const filter
