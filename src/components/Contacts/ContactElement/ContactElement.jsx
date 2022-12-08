import css from './ContactElement.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/actions';

export const ContactElement = ({ contact }) => {
  const dispatch = useDispatch();

  // const handelDelete = contactId => {
  //   const newArray = contacts.filter(contact => contact.id !== contactId);
  //   setContacts(newArray);
  // };

  return (
    <div>
      <span className={css.contact__name}>
        {contact.name}: {contact.number}
      </span>
      <button type="button" onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </button>
    </div>
  );
};

ContactElement.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
