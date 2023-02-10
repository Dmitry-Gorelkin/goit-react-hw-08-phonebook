import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Loader } from 'components/Loader/Loader';
import { Notification } from 'components/Notification/Notification';

export const Contacts = () => {
  return (
    <>
      <Section title="phonebook">
        <ContactForm />
      </Section>
      <Section title="contacts">
        <Filter />
        {/* {!error && !isLoading && <ContactList />} */}
        <ContactList />
        {/* {isLoading && <Loader />} */}
        <Loader />
        {/* {error && <Notification message={error} />} */}
        <Notification message={'error'} />
      </Section>
    </>
  );
};
