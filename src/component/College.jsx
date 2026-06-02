import React, { useState } from 'react'

export default function College() {
    const [name, setName] = useState("KCE")
    return (
        <div>
            <input type="text"
                onChange={(e) => setName(e.target.value)} />
            <p>College: {name}</p>
        </div>
    )
}

