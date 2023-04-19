import {useEffect, useState}  from 'react';
import Form from './Form.js/Form';
import Contacts from 'components/Contacts/Contacts';
import { nanoid } from 'nanoid';
import FindContact from './FindContact/FindContact';
import Total from './Total/Total';
document.title = 'my App'

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contact')) ?? [];
  })
  const [filter, setFilter] = useState('');
  const [total, setTotal] = useState(0);

  const onSubmit = ({userName, userNumber, company}) => {
    const contact = {
      id: nanoid(),
      name: userName,
      number: userNumber,
      company: company,
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
  }, [contacts]);

  useEffect(() => {
    setTotal(() => contacts.length)
  }, [contacts])

    return (
        <div>
            <Form onSubmit={onSubmit}/>
            <FindContact onChangeFilter={filteredContactValue}/>
            <Contacts contactsList={findContacts()} onDeleteContact={deleteContact}/>
            <Total total={total}/>
        </div>
    );
  }

