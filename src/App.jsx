import React from 'react';
import './styles/main.scss';
import { BrowserRouter } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/root'
import Navbar from './containers/navbar/navbar';


function App() {
  return (
    <div className="App">
      <div className='App-content'>
        <Router>
          <Navbar />
          <AppRoutes />
        </Router>
      </div>
    </div>
  )
}

export default App
