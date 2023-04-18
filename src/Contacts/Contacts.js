const Contacts = ({contactsList}) => {

  return (
    <>
      <h1>Contacts</h1>
      <ul>
        {contactsList.map(({id, name, number}) => (
        <li key={id}>
          <p>{name}: {number}</p>
          <button type="button">Delete</button>
        </li>))}
      </ul>
    </>
  )
}

export default Contacts;
