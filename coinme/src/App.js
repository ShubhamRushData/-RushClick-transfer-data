// src/App.js
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Alrt from './Pages/Alrt';
import Verify from './Pages/Verify';
import Demo from './Pages/Demo';
import { UserProvider } from './Context/UserContext'; // ✅ yeh import

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider> {/* ✅ Wrap Routes inside UserProvider */}
          <Routes>
            <Route path="/" element={<Demo />} />
            <Route path="/alt" element={<Alrt />} />
            <Route path="/home" element={<Home />} />
            <Route path="/verify" element={<Verify />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
