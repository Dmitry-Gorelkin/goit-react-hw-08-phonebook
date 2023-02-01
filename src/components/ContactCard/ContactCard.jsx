import PropTypes from 'prop-types';
import { ContactListItem, ContactListItemDelete } from './ContactCard.styled';

export const ContactCard = ({ name, phone, onDelete }) => {
  return (
    <ContactListItem>
      {name}: {phone}
      <ContactListItemDelete onClick={onDelete}>Delete</ContactListItemDelete>
    </ContactListItem>
  );
};

ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
