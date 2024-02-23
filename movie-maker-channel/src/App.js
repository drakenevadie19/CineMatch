import React from 'react';
import './App.css';
import HeaderComponent from './components/header';
import FooterComponent from './components/footer';
import MovieContainer from './container/moviesContainers';

const App = () => {
  return ( 
    <>
      <HeaderComponent></HeaderComponent>
      <MovieContainer />
      <FooterComponent></FooterComponent>
    </>
   );
}
 
export default App;