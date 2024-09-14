import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// AppoloClient: dependency (service)
// InMemoryCache: Appllo client can use cached memory for fetching queries or re-fetching them
// ApolloProvider: wrap appolo
// gql: Allow use to write the queries inside our FE application
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { BrowserRouter as Router } from 'react-router-dom';
const apolloClient = new ApolloClient({
  uri: 'http://localhost:8000/getAllMovies',
  cache: new InMemoryCache(), 
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Apollo Provider will use this client, and allow us to fire the queries from FE to BE
  <ApolloProvider client={apolloClient}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
