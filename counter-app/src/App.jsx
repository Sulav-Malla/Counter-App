import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <>
      <div class="container">
        <h1 class="header">Simple Counter</h1>
        <h2 class="counter">Count: {count}</h2>
        <div>
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default App;
