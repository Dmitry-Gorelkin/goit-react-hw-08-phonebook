import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { attention } from 'utils/attention/attintion';
import { logOut } from 'redux/auth/operations';
import { Button } from 'components/UI/Button/Button';
import { UserMenuBox, UserMenuText } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user, isLoading } = useAuth();

  return (
    <UserMenuBox>
      <UserMenuText>Welcome, {user.name}</UserMenuText>
      <Button
        type="button"
        onClick={() =>
          dispatch(logOut())
            .unwrap()
            .catch(e => {
              attention.error(`${e}`);
            })
        }
        disabled={isLoading}
        load={isLoading}
      >
        Log Out
      </Button>
    </UserMenuBox>
  );
};
