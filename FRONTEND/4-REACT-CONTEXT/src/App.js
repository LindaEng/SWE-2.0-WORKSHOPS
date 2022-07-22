import React, { useContext } from 'react';
import { CountContext } from './CountProvider';

function App() {
  const { count, increment, decrement } = useContext(CountContext);

  return (
    <div className='layout'>
      <h1>Count provider</h1>
      <h2>The count is: {count}</h2>
      <button
        onClick={increment}
        className='btn btn-primary'
      >
        count++
      </button>
      <button
        onClick={decrement}
        className='btn btn-primary'
      >
        count--
      </button>
    </div>
  );
}

export { App };
