import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
  const {name, age} = props

  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - age
  }
  return (
    <div>
      <p> Hewo {name}, you are {age} years old! </p>
      <p> You were born in {bornYear()} </p>
    </div>
  )
}


const App = () => {
  const name = 'Han'
  const age = 0
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Snooky" age={0 + 6}/>
      <Hello name={name} age={age} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
