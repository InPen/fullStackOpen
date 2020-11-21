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
  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(countriesResponse => setCountries(countriesResponse.data))

  }, [])
console.log(countries)



  return (
  <div>
    {countries.map(country => <h1>{country.name}</h1>)}
  </div>
  )
}

export default App
