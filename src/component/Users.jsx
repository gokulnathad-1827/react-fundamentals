import React from 'react'
import { useState } from 'react'

function Users() {
  const [user, setUser] = React.useState([]);
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data))
  }, [])
  return (
    <div><h1>Users</h1>
      {user.map((u, index) => (
        <div className="user-card" key={index}>
          <h3>{u.name}</h3>
          <p>{u.email}</p>
        </div>
      ))}
    </div>
  )
}

export default Users
