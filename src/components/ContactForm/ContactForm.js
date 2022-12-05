import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

export const ContactForm = ({ onSubmitProp }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(state => state.contacts);

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmitProp({ id: nanoid(), name: name, number: number });
    reset();
  };

  return (
    <form className={css.formAddBook} onSubmit={handleSubmit}>
      <label className={css.formAddBook__label}>
        Name
        <input
          className={css.formAddBook__input}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </label>
      <label className={css.formAddBook__label}>
        Phone Number
        <input
          className={css.formAddBook__input}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmitProp: PropTypes.func.isRequired,
};
