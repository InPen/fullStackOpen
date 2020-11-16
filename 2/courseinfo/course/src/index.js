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
    name:'Half stack application development',
    parts : [
    {name:'Fundamentals of React', exercises: 10},
    {name:'Using props to pass data', exercises:7},
    {name:'State of a component', exercises:14}
  ]
}
  return (
    <div>
      <Header course={course}/>
      <Content name={course.parts[0].name} exercises={course.parts[0].exercises}/>
      <Content name={course.parts[1].name} exercises={course.parts[1].exercises}/>
      <Content name={course.parts[2].name} exercises={course.parts[2].exercises}/>
      <Total total={course.parts[0].exercises + course.parts[0].exercises + course.parts[0].exercises}/>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
