import React from 'react'

function Student({ students }) {
  return (
    <div>
      <h2>Student Info</h2>
      <p>Registration No:{students.regno}</p>
      <p>Name:{students.name}</p>
      <p>Department:{students.dept}</p>
      <p>Year:{students.year}</p>
    </div>
  )
}

export default Student
