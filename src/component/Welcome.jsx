import React from 'react'

function Welcome() {
  const hour = new Date().getHours();
  const greet = hour < 12 ? "Good Morning" : hour < 17
    ? "Good Afternoon" : "Good Evening";
  return (
    <div className="welcome-container">
      <div className="welcome-text">
        <h1>Hello! {greet}</h1>
      </div>
    </div>
  )
}

export default Welcome
