import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getIsLoading } from 'redux/contacts/selectors';
import { ContactListItem, ContactListText } from './ContactCard.styled';
import { ButtonIcon } from 'components/UI/ButtonIcon/ButtonIcon';
import { FiTrash2 } from 'react-icons/fi';

export const ContactCard = ({ name, number, onDelete, id }) => {
  const isLoading = useSelector(getIsLoading);
  const [elementID, setElementID] = useState('');
  const [load, setLoad] = useState(isLoading);

  const spinerDelContakt = e => {
    setElementID(e.target.id);
    onDelete();
  };

  useEffect(() => {
    if (elementID === id) {
      setLoad(isLoading);
    }
  }, [elementID, id, isLoading]);

  return (
    <ContactListItem>
      <ContactListText>
        {name}: {number}
      </ContactListText>

      <ButtonIcon
        type="button"
        onClick={spinerDelContakt}
        id={id}
        disabled={isLoading}
        load={load}
      >
        <FiTrash2 size="20px" />
      </ButtonIcon>
    </ContactListItem>
  );
};

ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
