import ContactItem from './ContactsListItem';
import PropTypes from 'prop-types';
import { ContactsUl } from './contactsList.styled';

const ContactsList = ({ findContact, onDeleteContact }) => {
  return (
    <ContactsUl>
      {findContact().map(({ id, name, number }) => {
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        );
      })}
    </ContactsUl>
  );
};

ContactsList.prototype = {
  findContact: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
