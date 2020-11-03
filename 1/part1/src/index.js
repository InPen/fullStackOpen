import React from 'react';
import ReactDOM from 'react-dom';

const Hello = ({name, age}) => {

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


const App = (props) => {
  const {counter} = props
  return (
    <div> {counter}</div>
  )
  // const name = 'Han'
  // const age = 0
  // return (
  //   <div>
  //     <h1>Greetings</h1>
  //     <Hello name="Snooky" age={0 + 6}/>
  //     <Hello name={name} age={age} />
  //   </div>
  // )
}
let counter = 1
const refresh = () => {
  ReactDOM.render(<App counter={counter} />, document.getElementById('root'))
}
setInterval(() => {
  refresh()
  counter +=1
}, 1000)
// refresh()
// counter +=1
// refresh()
// counter +=1
// refresh()
