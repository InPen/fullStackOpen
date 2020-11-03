import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
  return (
    <div>
      <p> Hewo {props.name}, you are {props.age} years old </p>
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
      <Footer />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
