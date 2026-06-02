import React from 'react'
import cars from './cars'
import '../App.css'

function Car() {
    return (
        <div>
            <h1 style={{color:'black'}}>Car List</h1><br />
            <div className='container'>
                {cars.map((car, index) => (
                    <article key={index}>
                        <div className='card'>
                            <img src={car.url} width="300" />
                            <h2><strong>Name: {car.name}</strong></h2>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}

export default Car