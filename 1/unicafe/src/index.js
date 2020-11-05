import React, { useState } from 'react'
import ReactDOM from 'react-dom'


// const Stats = (props) => {
//   console.log('total is ', props)
// }

const Button = (props) => {
  // console.log('props value is ', props)
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

  const totalFeedback = () => {
    let total = (good + neutral + bad)
    // console.log(total)
    return total
  }
  const averageScore = () => {
    let average = ((good + neutral + bad) / 3)
    // console.log(average)
    return average
  }
  const percentageOfPositiveFeedback = () => {
    let percent = (good/100) 
    console.log(percent)
    return percent
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
      <p>Total Feedback: {totalFeedback()}</p>
      <p> Average: {averageScore()}</p>
      <p> Average Positive: {percentageOfPositiveFeedback()}%</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
