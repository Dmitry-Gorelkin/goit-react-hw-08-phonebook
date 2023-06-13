import { NavigationLink } from 'components/UI/NavigationLink/NavigationLink.styled';
import { AuthNavBox } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavBox>
      <NavigationLink to="/registration">Registration</NavigationLink>
      <NavigationLink to="/login">Log In</NavigationLink>
    </AuthNavBox>
  );
};
