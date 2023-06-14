import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { getError, getIsLoadingFech } from 'redux/contacts/selectors';
import { Section } from 'components/UI/Section/Section';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Loader } from 'components/UI/Loader/Loader';
import { Notification } from 'components/UI/Notification/Notification';

export const Contacts = () => {
  const dispatch = useDispatch();
  const isLoadingFech = useSelector(getIsLoadingFech);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section title="contacts">
        <Filter />
        {isLoadingFech && <Loader />}
        {!error && !isLoadingFech && <ContactList />}
        {error && <Notification message={error} />}
      </Section>
    </>
  );
};
