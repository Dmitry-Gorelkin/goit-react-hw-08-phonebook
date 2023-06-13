import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix';
import { registation } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import {
  RegistrationFormBox,
  RegistrationFormInput,
  RegistrationFormLabel,
} from './RegistrationForm.styled';
import { Button } from 'components/UI/Button/Button';

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const { isLoading } = useAuth();

  const handkSubmit = e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    if (name === '' || email === '' || password === '') {
      Notify.warning('Enter data for registration.');
      return;
    }

    if (password.length < 7) {
      Notify.warning('Password must be 7 characters or more.');
      return;
    }

    dispatch(
      registation({
        name,
        email,
        password,
      })
    )
      .unwrap()
      .catch(e => {
        Notify.failure(`${e}`);
      });
  };

  return (
    <RegistrationFormBox autoComplete="off" onSubmit={handkSubmit}>
      <RegistrationFormLabel for="username">Username </RegistrationFormLabel>
      <RegistrationFormInput type="text" name="name" id="username" />

      <RegistrationFormLabel for="useremail">Email </RegistrationFormLabel>
      <RegistrationFormInput type="email" name="email" id="useremail" />

      <RegistrationFormLabel for="userpassword">Password</RegistrationFormLabel>
      <RegistrationFormInput
        type="password"
        name="password"
        id="userpassword"
      />

      <Button type="submit" disabled={isLoading} load={isLoading}>
        Registration
      </Button>
    </RegistrationFormBox>
  );
};
