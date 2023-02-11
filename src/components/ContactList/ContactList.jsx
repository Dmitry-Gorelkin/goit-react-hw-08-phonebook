import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contacts/operations';
import { getContacts } from 'redux/contacts/selectors';
import { getFilter } from 'redux/filter/selectors';
import { ContactCard } from 'components/ContactCard/ContactCard';
import { Notification } from 'components/Notification/Notification';
import { ContactListConteiner } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const visibleContactList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <>
      {visibleContactList.length !== 0 ? (
        <ContactListConteiner>
          {visibleContactList.map(item => {
            const { id, name, number } = item;
            return (
              <ContactCard
                key={id}
                name={name}
                number={number}
                onDelete={() => dispatch(deleteContacts(id))}
              />
            );
          })}
        </ContactListConteiner>
      ) : (
        <Notification message="no contacts" />
      )}
    </>
  );
};
