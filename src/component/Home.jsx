import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Home() {
  const [regno, setRegno] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const searchResult = () => {
    if (regno.trim() === "") {
      setError('Registration number Required');
      return
    }
    setError('');
    navigate(`/result/${regno}`);
  };
  return (
    <div className="home">
      <h1>Welcome to KCE</h1><br />
      <h2>Student Result Portal</h2><br />
      <p>
        Welcome to the official result viewing portal.
      </p>

      <input
        type="text"
        placeholder="Enter Register Number"
        value={regno}
        onChange={(e) =>
          setRegno(e.target.value)
        }
      />
      <button onClick={searchResult}>
        View Result
      </button>
      <p className="error">
        {error}
      </p>

    </div>
  )
}

export default Home
