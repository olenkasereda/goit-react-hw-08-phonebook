import { FormInput } from './Filter.styled.js';
import { useDispatch, useSelector } from 'react-redux';
import { contactsFilter } from 'redux/contacts/contactsSlice';
import { selectFilter } from 'redux/contacts/selectors';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  function onChangeFilter(event) {
    dispatch(contactsFilter(event.currentTarget.value));
  }
  return (
    <label>
      <FormInput
        type="text"
        value={filter}
        onChange={onChangeFilter}
        placeholder="Find contacts by name"
      />
    </label>
  );
};

export default Filter;
