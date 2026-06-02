import React from 'react'

function Toggle() {
    const [show, setShow] = React.useState(true)
    return (
        <div className="container">
            <button onClick={() => setShow(!show)}>
                {show ? "Hide" : "Show"}
            </button>

            {show && <h1>Welcome to KCE</h1>}
        </div>
    )
}

export default Toggle
