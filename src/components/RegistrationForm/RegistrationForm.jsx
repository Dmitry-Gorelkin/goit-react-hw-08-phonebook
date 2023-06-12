import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix';
import { registation } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Spiner } from 'components/UI/Spiner/Spiner';

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
    <form autoComplete="off" onSubmit={handkSubmit}>
      <label>
        Username
        <input type="text" name="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit" disabled={isLoading}>
        {isLoading && <Spiner />}
        Registration
      </button>
    </form>
  );
};
