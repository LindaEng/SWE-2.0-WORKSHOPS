import React from 'react';
import { useParams, Link } from 'react-router-dom';

function Greet() {
  const params = useParams();

  return (
    <div>
      <h1>Hello, {params.name}</h1>
      <Link to="/">go back home</Link>
    </div>
  );
}

export { Greet };
