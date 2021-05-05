import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../helpers/routes';
import './App.scss';

function App() {
  return (
   <>
   <Router>
     <Routes/>
   </Router>
   </>
  );
}

export default App;
