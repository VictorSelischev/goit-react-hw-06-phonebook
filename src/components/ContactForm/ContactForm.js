import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/actions';

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const comparisonName = (name, number) => {
    contacts.find(
      contact => name.toLowerCase() === contact.name.toLocaleLowerCase()
    )
      ? alert(`${name} is already in contacts`)
      : dispatch(addContact(name, number));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    comparisonName(name, number);

    // addContact({ id: nanoid(), name: name, number: number });
    form.reset();
  };

  return (
    <form className={css.formAddBook} onSubmit={handleSubmit}>
      <label className={css.formAddBook__label}>
        Name
        <input
          className={css.formAddBook__input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.formAddBook__label}>
        Phone Number
        <input
          className={css.formAddBook__input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};
