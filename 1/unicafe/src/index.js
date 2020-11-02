import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <header>
      <h1>{props.course}</h1>
    </header>
  )
}

const Content = (props) => {
  console.log(props);
  return (
    <p>The topic of the course is {props.part} and there are {props.exercises} exercises</p>
  )
}

const Total = (props) => {
  return (
    <p>In total this course has {props.total} exercises</p>
  )
}

const App = () => {
  const course = 'Half stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header  course={course}/>
      <Content part={part1} exercises={exercises1}/>
      <Content part={part2} exercises={exercises2}/>
      <Content part={part3} exercises={exercises3}/>
      <Total total={exercises1+exercises2+exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
