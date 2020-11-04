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
  const [clicks, setClicks] = useState({
    left:0, right:0
  })
  const handleLeftClick = () => setClicks({...clicks, left: clicks.left + 1})

  const handleRightClick = () => setClicks({...clicks, right: clicks.right + 1})
    // const newClicks = {
    //   right: clicks.right +1,
    //   left: clicks.left
    // }
    // setClicks(newClicks)
  return (
    <div>
    {clicks.left}
      <button onClick={handleLeftClick}> Left </button>
      <button onClick={handleRightClick}> Right </button>
    {clicks.right}
    </div>
  )

}

ReactDOM.render(<App />, document.getElementById('root'))
