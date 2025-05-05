// import React from 'react'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import LoginModal from './pages/Login';
import Verify from './pages/Verify';
import Expert from './pages/Expert';

export default function App() {
  return (
    
      <Router>
        <Routes>
          <Route path='/' element={<LoginModal/>} />
          <Route path='/verify' element={<Verify/>} />
          <Route path='/expert' element={<Expert/>} />

        </Routes>

      </Router>
    
  )
}



