import React from 'react';
import './App.css';
import HeaderComponent from './components/header';
import FooterComponent from './components/footer';
import MovieContainer from './container/moviesContainers';
import AddMovie from './components/add-movie';

import { HashLink as Link } from 'react-router-hash-link';

// React router hash link allow user to automatically scroll you wherever it finds the ID (/...)
const App = () => {
  return ( 
    <>
      <HeaderComponent></HeaderComponent>
      <MovieContainer />
      <AddMovie />
      <FooterComponent></FooterComponent>
    </>
   );
}
 
export default App;