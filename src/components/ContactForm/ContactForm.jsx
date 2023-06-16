import { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { addContacts } from 'redux/contacts/operations';
import { getContacts, getIsLoading } from 'redux/contacts/selectors';
import { attention } from 'utils/attention/attintion';
import { Button } from 'components/UI/Button/Button';
import {
  FormBox,
  FormLabel,
  FormInputBox,
  FormInput,
  FormBtnBox,
  FormIconUser,
  FormIconPhone,
} from 'components/UI/Form/Form.style';
import { ButtonGoBack } from 'components/UI/ButtonGoBack/ButtonGoBack';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/contacts');

  const handleInput = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        console.log(`Такого варианта: ${name}, нет.`);
        break;
    }
  };

  const onFormSubmit = e => {
    e.preventDefault();

    if (contacts.find(item => item.name.toLowerCase() === name.toLowerCase())) {
      attention.warning(`${name} is already in contacts.`);
      setName('');
      return;
    }

    dispatch(addContacts({ name, number }))
      .unwrap()
      .then(() => {
        navigate('/contacts');
      })
      .catch(e => {
        attention.error(`${e}`);
      });
  };

  return (
    <>
      <ButtonGoBack
        to={backLinkHref.current}
        load={isLoading ? isLoading.toString() : undefined}
      />
      <FormBox onSubmit={onFormSubmit}>
        <FormLabel>Name</FormLabel>
        <FormInputBox>
          <FormInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleInput}
            value={name}
          />
          <FormIconUser size="20px" />
        </FormInputBox>
        <FormLabel>Number</FormLabel>
        <FormInputBox>
          <FormInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleInput}
            value={number}
          />
          <FormIconPhone size="20px" />
        </FormInputBox>
        <FormBtnBox>
          <Button type="submit" disabled={isLoading} load={isLoading}>
            Add contact
          </Button>
        </FormBtnBox>
      </FormBox>
    </>
  );
};
