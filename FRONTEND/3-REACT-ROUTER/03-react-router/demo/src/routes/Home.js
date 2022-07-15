import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Hello from Home!</h1>
      <Link to='/about'>About</Link> | <Link to='/greet/John'>Greet John</Link>
    </div>
  );
}

export { Home };
