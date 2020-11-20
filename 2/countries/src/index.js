import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Countries = (props) => {
  return (
    <div>
      <p>find countries {props.name} </p>
    </div>
  )
}

const App = () => {
  const [ counter, setCounter ] = useState(0)
  setTimeout(
    () => setCounter(counter + 1),
    1000
  )
  return (
  <div>
    <Countries name='Switzerland' />
    {counter}
  </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
