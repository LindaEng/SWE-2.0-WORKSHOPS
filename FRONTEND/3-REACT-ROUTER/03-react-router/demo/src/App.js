import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About, Home, Greet } from './routes';

/*
  make sure to install the latest version of react-router-dom
  npm install react-router-dom@6
*/

function App() {
  return (
    <div className='mt-4 mx-auto h-75 w-75'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path="/greet/:name" element={<Greet />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export { App };
