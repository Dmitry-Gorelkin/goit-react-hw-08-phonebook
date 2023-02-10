import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { logOut } from 'redux/auth/operations';
import { Spiner } from 'components/Spiner/Spiner';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user, isLoading } = useAuth();

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button
        type="button"
        onClick={async () => await dispatch(logOut())}
        disabled={isLoading}
      >
        {isLoading && <Spiner />}
        Logout
      </button>
    </div>
  );
};
