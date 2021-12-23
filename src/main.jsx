import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App' /* Este es el componente principal porque es el que carga todo en el HTML */

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') /* A través de esta id se carga todo en el HTNL */
)
