Этот проект был создан при помощи
[Create React App](https://github.com/facebook/create-react-app). Для знакомства
и настройки дополнительных возможностей
[обратись к документации](https://facebook.github.io/create-react-app/docs/getting-started).

В первую очередь пропишем базовые требования к интерфейсу и логике работы
приложения:

Интерфейс должен состоять из нескольких частей:

- Форма с полями ввода и кнопкой;
- Фильтр контактов;
- Список контактов;

В списке контактов необходимо отображать:

- Имя и телефон контакта;
- Кнопку удаления контакта;

const appState = { contacts: [], filter: "" }

Каждый контакт будет представлена объектом со следующими свойствами: id, name,
number

// contacts: [ // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' }, //
{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' }, // { id: 'id-3',
name: 'Eden Clements', number: '645-17-79' }, // { id: 'id-4', name: 'Annie
Copeland', number: '227-91-26' }, // ]

Проектирование экшенов. Экшены это события которые могут произойти в приложении,
в том числе как реакция на действия пользователя. Составим список событий
которые могут быть в нашем приложении:

- Добавить новый контакт с именем и телефоном, введенные пользователем;
- Удалить контакт из телефонной книги;
- Обновить значение фильтра телефонной книги.

1. Создаем сторе (хранилище)
2.
