import { useAuth } from 'hooks';
import { NavigationLink } from 'components/UI/NavigationLink/NavigationLink.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <NavigationLink to="/">Home</NavigationLink>
      {isLoggedIn && <NavigationLink to="/contacts">Contacts</NavigationLink>}
    </div>
  );
};
