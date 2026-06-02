import React from 'react'

function Course({courses}) {
  return (
    <div>
        <h1>Courses</h1>
        {courses.map((course,index)=>(
            <li key={index}>{course}</li>
        ))}
    </div>
  )
}

export default Course
