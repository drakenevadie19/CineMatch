import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/home-page';

// React router hash link allow user to automatically scroll you wherever it finds the ID (/...)
const App = () => {
  return ( 
      <BrowserRouter>
        <div className='App'>
          <Routes>
            <Route path='/' element={<HomePage />} />
          </Routes>
        </div>
      </BrowserRouter>
   );
}
 
export default App;