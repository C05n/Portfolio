import React from 'react';
import './styles/Main.scss';
import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './routes/Root'
import Header from './components/header/Header';


function App() {
  return (
    <div className="App">
      <div className='App-content'>
        <BrowserRouter>
          <Header />
          <AppRoutes />
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
