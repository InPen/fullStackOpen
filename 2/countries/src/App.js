import React, {useState, useEffect} from 'react'
// import Filter from './components/Filter'
// import Countries from './components/Countries'
// import Country from './components/Country'
import axios from 'axios'

const App = () => {
//search is an empty string. setSearch is a function used to update search
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])

//takes callBack function && array
  const hook = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(countriesResponse => setCountries(countriesResponse.data))
  }
  useEffect(hook, [])

  const findCountry = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
  }

  return (
  <div>
    <p>find countries</p>
    <form onSubmit={findCountry}>
      <input />
      <button type="submit">search</button>
    </form>
    <ul>
    {countries.map(country => <h2>{country.name}</h2>)}
    </ul>
  </div>
  )
}

export default App
