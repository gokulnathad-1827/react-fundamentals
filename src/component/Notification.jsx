import React from 'react'

function Notification() {

    const isDue = true;

    return (
        <div>

            <h1>Assignment Status</h1>

            <p className={isDue ? "red" : "green"}>
                {isDue ? "Assignment Due Today!" : "No Pending Assignments"}
            </p>

        </div>
    )
}

export default Notification