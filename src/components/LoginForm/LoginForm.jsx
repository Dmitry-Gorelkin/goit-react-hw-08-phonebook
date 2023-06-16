import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { attention } from 'utils/attention/attintion';
import { Button } from 'components/UI/Button/Button';
import {
  FormBox,
  FormLabel,
  FormInputBox,
  FormInput,
  FormBtnBox,
  FormIconMail,
  FormIconPassword,
} from 'components/UI/Form/Form.style';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const { isLoading } = useAuth();

  const handkSubmit = async e => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    if (email === '' || password === '') {
      attention.warning('Enter data for authorization.');
      return;
    }

    await dispatch(
      logIn({
        email,
        password,
      })
    )
      .unwrap()
      .catch(e => {
        attention.error(`${e}`);
      });
  };

  return (
    <FormBox autoComplete="off" onSubmit={handkSubmit}>
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
          Log In
        </Button>
      </FormBtnBox>
    </FormBox>
  );
};
