import React from 'react'
import ReactDOM from 'react-dom'

const Countries = (props) => {
  return (
    <div>
      <p>I don't have papers {props.name} </p>
    </div>
  )
}

const App = () => (
  <div>
    <Countries name='por pendeja' />
    <Countries />
    <Countries />
    <Countries />
    <Countries />
    <Countries />
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
