import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import ToStep from './component/ToStep';
import Expert from './component/Expert';

// App component is now a child of BrowserRouter
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/tostep" element={<ToStep/>} />
          <Route path="/expert" element={<Expert/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}




export default App;
