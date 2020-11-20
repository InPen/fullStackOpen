import React from 'react'
import ReactDOM from 'react-dom'

const Countries = () => {
  return (
    <div>
      <p>I can't travel anywhere because I don't have papers</p>
    </div>
  )
}

const App = () => (
  <div>
    <Countries />
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
