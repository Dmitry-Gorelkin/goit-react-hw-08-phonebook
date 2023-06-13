import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix';
import { registation } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Button } from 'components/UI/Button/Button';
import {
  FormBox,
  FormLabel,
  FormInputBox,
  FormInput,
  FormBtnBox,
  FormIconUser,
  FormIconMail,
  FormIconPassword,
} from 'components/UI/Form/Form.style';

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
    <FormBox autoComplete="off" onSubmit={handkSubmit}>
      <FormLabel htmlFor="username">Username</FormLabel>
      <FormInputBox>
        <FormInput type="text" name="name" id="username" />
        <FormIconUser size="20px" />
      </FormInputBox>

      <FormLabel htmlFor="useremail">Email</FormLabel>
      <FormInputBox>
        <FormInput type="email" name="email" id="useremail" />
        <FormIconMail size="20px" />
      </FormInputBox>
      <FormLabel htmlFor="userpassword">Password</FormLabel>
      <FormInputBox>
        <FormInput type="password" name="password" id="userpassword" />
        <FormIconPassword size="20px" />
      </FormInputBox>
      <FormBtnBox>
        <Button type="submit" disabled={isLoading} load={isLoading}>
          Registration
        </Button>
      </FormBtnBox>
    </FormBox>
  );
};
