import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix';
import { logIn } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Spiner } from 'components/UI/Spiner/Spiner';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const { isLoading } = useAuth();

  const handkSubmit = async e => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    if (email === '' || password === '') {
      Notify.warning('Enter data for authorization.');
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
        Notify.failure(`${e}`);
      });
  };

  return (
    <form autoComplete="off" onSubmit={handkSubmit}>
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit" disabled={isLoading}>
        {isLoading && <Spiner />} Log In
      </button>
    </form>
  );
};
