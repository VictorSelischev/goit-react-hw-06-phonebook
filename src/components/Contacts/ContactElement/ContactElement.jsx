import css from './ContactElement.module.css';
import PropTypes from 'prop-types';

  const deleteContact = contactId => {
    const newArray = contacts.filter(contact => contact.id !== contactId);
    setContacts(newArray);
  };

export const ContactElement = ({ id, name, number}) => {
  return (
    <div>
      <span className={css.contact__name}>
        {name}: {number}
      </span>
      <button type="button" onClick={() => deleteContact(id)}>
        Delete
      </button>
    </div>
  );
};

ContactElement.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
}
