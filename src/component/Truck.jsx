import React from 'react'
import trucks from './trucks'
function truck() {
    return (
        <div >
                <h1 style={{ color: 'black' }}>Truck List</h1><br />
            <div className='container'>
            {trucks.map((truck, index) => (
                <article key={index}>
                    <div className='card'>
                        <img src={truck.url} width="300" />
                        <h2><strong>{truck.name}</strong></h2>
                    </div>
                </article>
            ))}
        </div>
        </div>
    )
}

export default truck
