import css from './Filter.module.css';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export const Filter = () => {
  
  // const handleChangeFilter = evt => {
  //   setFilter(evt.target.value);
  // };

  const filter = useSelector(state => state.filter);
    console.log(filter);
  return (
    <label className={css.formAddBook__label}>
      Find contacts by name
      <input
        className={css.formAddBook__input}
        type="text"
        value={filter}
        onChange={handleChangeFilter}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
