import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Routes';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <AppRoutes />
      </Router>
    </>
  )
}

export default App