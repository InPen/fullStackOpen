import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Display = ({counter}) => {
  return (
    <div> {counter} </div>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <button onClick = {handleClick}> {text} </button>
  )
}

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  // const [counter, setCounter] = useState(0)
  // const increaseByOne = () => setCounter(counter + 1)
  // const decreaseByOne = () => setCounter(counter -1)
  // const setToZero = () => setCounter(0)

  return (
    <div>
    {left}
      <button onClick={() => setLeft(left + 1)}> Left </button>
      <button onClick={() => setRight(right + 1)}> Right </button>
    {right}
    </div>
  )

}

ReactDOM.render(<App />, document.getElementById('root'))
