import PropTypes from 'prop-types';
import { ItemButton } from './contactsListItem.styled';

const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li>
      {name}: {number}
      <ItemButton type="submit" onClick={() => onDeleteContact(id)}>
        Delete
      </ItemButton>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
