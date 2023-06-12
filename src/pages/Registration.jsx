import { Helmet } from 'react-helmet';
import { Section } from 'components/UI/Section/Section';
import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';

export const Registration = () => {
  return (
    <Section title="Registration">
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegistrationForm />
    </Section>
  );
};
