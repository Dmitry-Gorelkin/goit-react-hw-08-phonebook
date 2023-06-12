import PropTypes from 'prop-types';
import { ContactListItem, ContactListItemDelete } from './ContactCard.styled';

import { useSelector } from 'react-redux';
import { getIsLoading } from 'redux/contacts/selectors';
import { Spiner } from 'components/UI/Spiner/Spiner';
import { useState } from 'react';
import { useEffect } from 'react';

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
      {name}: {number}
      <ContactListItemDelete
        onClick={spinerDelContakt}
        id={id}
        disabled={isLoading}
      >
        {load && <Spiner />}
        Delete
      </ContactListItemDelete>
    </ContactListItem>
  );
};

ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
