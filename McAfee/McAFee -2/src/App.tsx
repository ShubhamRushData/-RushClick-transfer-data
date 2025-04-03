import Home from './component/Home';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Office1 from './pages/office1';
import Window from './pages/Window';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/office" element={<Office1/>} />
        <Route path="/window" element={<Window/>} />


      </Routes>
    </Router>
  );
}

export default App;
