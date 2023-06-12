import { Helmet } from 'react-helmet';
import { Section } from 'components/UI/Section/Section';
import { LoginForm } from 'components/LoginForm/LoginForm';

export const Login = () => {
  return (
    <Section title="Login">
      <Helmet>
        <title>Log In</title>
      </Helmet>
      <LoginForm />
    </Section>
  );
};
