import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/operations';
import { getContacts, getFilter } from 'redux/selectors';
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
            const { id, name, phone } = item;
            return (
              <ContactCard
                key={id}
                name={name}
                phone={phone}
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
