import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix';
import { useAuth } from 'hooks';
import { logOut } from 'redux/auth/operations';
import { Spiner } from 'components/UI/Spiner/Spiner';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user, isLoading } = useAuth();

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button
        type="button"
        onClick={() =>
          dispatch(logOut())
            .unwrap()
            .catch(e => {
              Notify.failure(`${e}`);
            })
        }
        disabled={isLoading}
      >
        {isLoading && <Spiner />}
        Logout
      </button>
    </div>
  );
};
