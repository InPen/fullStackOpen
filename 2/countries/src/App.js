import React, {useState, useEffect} from 'react'
import axios from 'axios'

// import InputField from './components/InputField'
// import Countries from './components/Countries'

const App = (props) => {
//search is an empty string. setSearch is a function used to update search
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])
  // const [weatherData, setWeatherData] = useState(null)

//GET country data from api
  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(countriesResponse => {
        if (search !== "") {
          const searchResult = countriesResponse.data.filter(country =>
          country.name.toLowerCase().includes(search.toLowerCase()))
          setCountries(searchResult)
        }
      })
  }, [search])


  const findCountry = (event) => {
    event.preventDefault()
    setSearch(event.target.value)
  }

  return (
  <div>
    <p>find countries</p>
    <form onSubmit={showCountry}>
      <input
        value={search}
        onChange={findCountry}
      />
      <button type="submit">search</button>
    </form>
    <ul>
    {countries.map(country => <h2>{country.name}</h2>)}
    </ul>
  </div>
  )
}

export default App
