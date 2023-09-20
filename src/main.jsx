import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import { HEADER, FOOTER } from './components';


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <BrowserRouter>

      <HEADER />
      <App />
      <FOOTER />

    </BrowserRouter>
  </React.StrictMode>,
  
)