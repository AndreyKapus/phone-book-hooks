import {useEffect, useState}  from 'react';
import Form from './Form.js/Form';
import Contacts from 'components/Contacts/Contacts';
import { nanoid } from 'nanoid';
import FindContact from './FindContact/FindContact';
document.title = 'my App'

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contact')) ?? [];
  })
  const [filter, setFilter] = useState('');

  const onSubmit = ({userName, userNumber}) => {
    const contact = {
      id: nanoid(),
      name: userName,
      number: userNumber,
    };

    const existingContact = contacts.find((el) => {
    return  el.name.toLowerCase() === contact.name.toLowerCase()
    });

    existingContact ? alert("Contact already exist") : setContacts([...contacts, contact]);
  };

  const filteredContactValue = (e) => {
    setFilter(e.target.value)
  };

  const findContacts = () => {
    const filteredContact = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.includes(filteredContact.toLowerCase())
    )
  };

  const deleteContact = (id) => {
    return setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== id)
    })
  }

  useEffect(() => {
    window.localStorage.setItem("contact", JSON.stringify(contacts))
  }, [contacts])

    return (
        <div>
            <Form onSubmit={onSubmit}/>
            <FindContact onChangeFilter={filteredContactValue}/>
            <Contacts contactsList={findContacts()} onDeleteContact={deleteContact}/>
        </div>
    );
  }

