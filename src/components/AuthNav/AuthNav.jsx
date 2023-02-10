import { Link } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <>
      <Link to="/registration">Registration</Link>
      <Link to="/login">Log In</Link>
    </>
  );
};
