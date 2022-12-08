import css from './ContactElement.module.css';
import PropTypes from 'prop-types';

  // const deleteContact = contactId => {
  //   const newArray = contacts.filter(contact => contact.id !== contactId);
  //   setContacts(newArray);
  // };

export const ContactElement = ({contact}) => {
  return (
    <div>
      <span className={css.contact__name}>
        {contact.name}: {contact.number}
      </span>
      <button type="button">
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
