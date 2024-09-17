import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/home-page';
import AdminPage from './components/admin-page/admin-page';
import MovieDetail from './components/normal-visitors/movie-details';

// React router hash link allow user to automatically scroll you wherever it finds the ID (/...)
const App = () => {
  return ( 
      <BrowserRouter>
        <div className='App'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/movie' element={<MovieDetail />} />
            <Route path='/admin' element={<AdminPage />} />
          </Routes>
        </div>
      </BrowserRouter>
   );
}
 
export default App;