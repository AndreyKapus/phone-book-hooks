import { useState } from "react"

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    const {name, value} = e.target

    switch(name) {
      case 'name':
      setName(value);
      break;

      case 'number':
        setNumber(value);
        break;

        default: return;
    }
  }

  return (
    <>
      <form>
        <label>
          <input
              type="text"
              name="name"
              onChange={handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
          />
        </label>

        <label>
          <input
              type="tel"
              name="number"
              onChange={handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
          />
        </label>
      </form>
    </>
  )
}

export default Form
