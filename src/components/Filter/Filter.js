import css from './Filter.module.css';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';

export const Filter = () => {
  const filter = useSelector(getFilter);
  console.log(filter);
  return (
    <label className={css.formAddBook__label}>
      Find contacts by name
      <input
        className={css.formAddBook__input}
        type="text"
        name='filter'
      />
    </label>
  );
};
