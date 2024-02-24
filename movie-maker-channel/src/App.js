import React from 'react';
import './App.css';
import HeaderComponent from './components/header';
import FooterComponent from './components/footer';
import MovieContainer from './container/moviesContainers';
import AddMovie from './components/add-movie';

// React router hash link allow user to automatically scroll you wherever it finds the ID (/...)
const App = () => {
  return ( 
    <>
      <HeaderComponent />
      <MovieContainer />
      <AddMovie />
      <FooterComponent />
    </>
   );
}
 
export default App;