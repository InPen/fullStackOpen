import React from 'react'
import Part from './Part'

const Content = (props) => {
  return (
    <div>
    {props.course.parts.map(part => (
      <Part part={part} />
    ))}
    </div>
  )
}

export default Content
