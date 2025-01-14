import React from 'react';
import './styles/main.scss';
import { HashRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/Root'
import Navbar from './containers/navbar/navbar';


function App() {
  return (
    <div className="App">
      <div className='App-content'>
          <Navbar />
          <AppRoutes />
      </div>
    </div>
  )
}

export default App
