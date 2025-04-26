import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactGA from 'react-ga';
import { AuthProvider } from './Pages/AuthContext';


// Initialize Google Analytics with your tracking ID
ReactGA.initialize('G-L3D2GYFPH6');



// Track pageview when the app is loaded
ReactGA.pageview(window.location.pathname + window.location.search);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>

    <App />
    </AuthProvider>
  </React.StrictMode>,
    document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
