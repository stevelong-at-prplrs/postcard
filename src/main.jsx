import * as React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { loadResource } from "./helpers";
import { loadResource } from "mod-pkg";
loadResource('/bundle.js');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
