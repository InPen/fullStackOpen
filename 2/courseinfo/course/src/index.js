import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <header>
      <h1>{props.course.name}</h1>
    </header>
  )
}
const Content = (props) => {
  console.log(props);
  return (
    <p>The topic of the course is {props.name} and there are {props.exercises} exercises</p>
  )
}
const Total = (props) => {
  return (
    <p>In total this course has {props.total} exercises</p>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}
ReactDOM.render(<App />, document.getElementById('root'))
