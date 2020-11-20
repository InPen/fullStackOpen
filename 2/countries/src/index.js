import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Country = (props) => {
  return (
    <div>
      <p>find countries {props.name} </p>
    </div>
  )
}

const Button = (props) => {
  console.log('clicked')
  return (
    <button onClick={props.handleClick}>
    {props.text}
    </button>
  )
}

const App = () => {
  const [ counter, setCounter ] = useState(0)
  setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  const setToZero = () => setCounter(0)

  return (
  <div>
    <Country name='Switzerland' />
    {counter}
    <Button handleClick={setToZero} text='show' />
  </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
