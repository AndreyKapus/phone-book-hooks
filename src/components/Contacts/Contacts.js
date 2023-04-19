const Contacts = ({contactsList, onDeleteContact}) => {

  return (
    <>
      <h1>Contacts</h1>
      <ul>
        {contactsList ? contactsList.map(({id, name, number}) => (
        <li key={id}>
          <p>{name}: {number}</p>
          <button type="button" onClick={() => onDeleteContact(id)}>Delete</button>
        </li>)): <div>Not found</div>}
      </ul>
    </>
  )
}

export default Contacts;
