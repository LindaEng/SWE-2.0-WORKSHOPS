import React, { useContext } from 'react';
//import CountContext

function App() {
  //import hook, and functions from file and useContext

  return (
    <div className='layout'>
      <h1>Count provider</h1>
      <h2>The count is: addCountHere!</h2>
      <button
        //onClick={increment}
        className='btn btn-primary'
      >
        count++
      </button>
      <button
        //onClick={decrement}
        className='btn btn-primary'
      >
        count--
      </button>
    </div>
  );
}

export { App };
