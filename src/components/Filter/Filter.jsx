import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addFilter } from 'redux/filter/slice';
import { FilterConteiner, Title } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const handelFilter = e => {
    dispatch(addFilter(e.target.value.toLowerCase()));
  };

  return (
    <FilterConteiner>
      <Title>Find contacts by name</Title>
      <input type="text" name="filter" onChange={handelFilter} />
      <Link to="/contacts/add">New Contact</Link>
    </FilterConteiner>
  );
};
