import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from 'redux/filter/slice';
import { getIsLoadingFech, getIsLoading } from 'redux/contacts/selectors';
import { FilterConteiner } from './Filter.styled';
import {
  FormLabel,
  FormInputBox,
  FormInput,
  FormIconUser,
} from 'components/UI/Form/Form.style';
import { ButtonLink } from 'components/UI/ButtonLink/ButtonLink';

export const Filter = () => {
  const dispatch = useDispatch();
  const isLoadingFech = useSelector(getIsLoadingFech);
  const isLoading = useSelector(getIsLoading);
  const [isLoad, SetIsLoad] = useState(isLoadingFech);

  const handelFilter = e => {
    dispatch(addFilter(e.target.value.toLowerCase()));
  };

  useEffect(() => {
    SetIsLoad(isLoadingFech || isLoading);
  }, [isLoading, isLoadingFech]);

  return (
    <FilterConteiner>
      <div>
        <FormLabel htmlFor="">Find contacts by name</FormLabel>
        <FormInputBox>
          <FormInput
            type="text"
            name="filter"
            onChange={handelFilter}
            id="userFilter"
          />
          <FormIconUser size="20px" />
        </FormInputBox>
      </div>
      <ButtonLink
        to="/contacts/add"
        load={isLoad ? isLoad.toString() : undefined}
      >
        New Contact
      </ButtonLink>
    </FilterConteiner>
  );
};
