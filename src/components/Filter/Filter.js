import css from './Filter.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setValueFilter } from 'redux/actions';

const handleChange = e => {};

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  console.log(filter);
  return (
    <label className={css.formAddBook__label}>
      Find contacts by name
      <input
        className={css.formAddBook__input}
        type="text"
        name="filter"
        value={dispatch(setValueFilter(value))}
        onChange={handleChange}
      />
    </label>
  );
};
