import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Stats = (props) => {}

const Button = (props) => {
  console.log('props value is ', props)
  const { onClick, text } = props
  return (
    <button onClick={onClick}> {text} </button>
  )
}


const App = () => {
//save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h2> Give Feedback, Please~ </h2>
      <Button onClick={handleGoodClick} text='Good' />
      <Button onClick={handleNeutralClick} text='Neutral' />
      <Button onClick={handleBadClick} text='Bad' />
      <hr/>
      <h2> Statistics </h2>
      <p>Good: {good} </p>
      <p>Neutral: {neutral} </p>
      <p>Bad: {bad} </p>

    </div>
  )
}
//   return (
//     <div>
//       <Header course={course}/>
//       <Content name={course.parts[0].name} exercises={course.parts[0].exercises}/>
//       <Content name={course.parts[1].name} exercises={course.parts[1].exercises}/>
//       <Content name={course.parts[2].name} exercises={course.parts[2].exercises}/>
//       <Total total={course.parts[0].exercises + course.parts[0].exercises + course.parts[0].exercises}/>
//     </div>
//   )
// }
ReactDOM.render(<App />, document.getElementById('root'))
