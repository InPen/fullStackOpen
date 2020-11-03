import React, {useState} from 'react';
import ReactDOM from 'react-dom';

// const Hello = ({name, age}) => {
//
//   const bornYear = () => {
//     const yearNow = new Date().getFullYear()
//     return yearNow - age
//   }
//   return (
//     <div>
//       <p> Hewo {name}, you are {age} years old! </p>
//       <p> You were born in {bornYear()} </p>
//     </div>
//   )
// }


const App = () => {
  const [counter, setCounter] = useState(0)
  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)
  return (
    <div>
      <div> {counter}</div>
      <button onClick={increaseByOne} > AddMeBruh </button>
      <button onClick={setToZero}> Zero </button>
    </div>
  )

}

ReactDOM.render(<App />, document.getElementById('root'))
