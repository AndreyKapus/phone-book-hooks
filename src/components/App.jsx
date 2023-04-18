import {useState}  from 'react';
import Form from './Form.js/Form';
import Contacts from 'Contacts/Contacts';
import { nanoid } from 'nanoid'
document.title = 'my App'
// const initialContacts = [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ]

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
    }
    setContacts(prevState => [...prevState, contact]);
    window.localStorage.setItem("contact", JSON.stringify(contacts))
  }

    return (
        <div>
            <Form onSubmit={onSubmit}/>
            <Contacts contactsList={contacts}/>
        </div>
    );
  }

