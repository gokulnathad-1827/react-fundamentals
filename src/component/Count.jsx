import React from 'react';

function Count() {
  const [count, setCount] = React.useState(1);

  return (
    <div className="container">
      <input
        type="button"
        value="Increment"
        onClick={() => setCount(count + 1)}
      />

      <input
        type="button"
        value= "Decrement"
        onClick={() => setCount(count - 1)}
      />

      <p>👍 {count}</p>
    </div>
  );
}

export default Count;