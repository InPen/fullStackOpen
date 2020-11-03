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
  const parts = [
    {name:'Fundamentals of React', exercises: 10},
    {name:'Using props to pass data', exercises:7},
    {name:'State of a component', exercises:14}
  ]


  return (
    <div>
      <Header course={course}/>
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
