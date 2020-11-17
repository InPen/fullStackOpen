import React, { useState } from 'react'

const App = (props) => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ])
  const [ newName, setNewName ] = useState('')

  const addContact = (event) => {
    event.preventDefault()
    const personObject = {
      content : newName,
      date : new Date().toISOString(),
      id : persons.length + 1,
    }
    setPersons(persons.concat(personObject))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <input
          value={newName}
        />
        <button type="submit">Add New Contact</button>
      </form>
      <h2>Numbers</h2>
      ...
    </div>
  )
}

export default App
