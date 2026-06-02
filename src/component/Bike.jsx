import React from 'react'
import bikes from './bikes'
import '../App.css'

function bike() {
    return (
        <div>
            <h1 style={{ color: 'black' }}>Bike List</h1><br />
            <div className='container'>
            {bikes.map((bike, index) => (
                <article key={index}>
                    <div className='card'>
                    <img src={bike.url} width="300" />
                    <h2><strong>{bike.name}</strong></h2>
                    </div>
                </article>
            ))}
            </div>
        </div>
    )
}

export default bike
