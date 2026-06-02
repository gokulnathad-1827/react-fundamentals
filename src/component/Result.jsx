import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import students from './students'


function Result() {
    const { regno } = useParams();
    const navigate = useNavigate()
    const student = students.find(s => s.regno === regno);
    if (!student) {
        return (<div>
            <h2>Student not found</h2>
            <button onClick={() => navigate('/')}>Back</button>
        </div>)
    }
    return (
        <div className='result'>
            <h2>Student Result</h2>
            <p>Name: {student.name}</p>
            <p>Year: {student.year}</p>
            <p>Department: {student.dept}</p>
            <table>
                <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Marks</th>
                    </tr>
                </thead>
                <tbody>
                    {student.subjects.map((sub, index) => (
                        <tr key={index}>
                            <td>{sub.name}</td>
                            <td>{sub.marks}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={() => navigate('/')}>Back</button>
        </div>

    )
}

export default Result
