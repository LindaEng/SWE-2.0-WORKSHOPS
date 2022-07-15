import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <h1>This is a React Router app!</h1>
      <h2>🚀 nice!</h2>
      <Link to="/">Go back home</Link>
    </div>
  );
}

export { About };
