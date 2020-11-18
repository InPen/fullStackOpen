import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = (props) => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        const persons = response.data
        console.log(persons)
      })
    }, [])
console.log('render', persons.length, 'persons')

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

  const handleContactChange = (event) =>{
    console.log(event.target.value)
    setNewName(event.target.value)
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
