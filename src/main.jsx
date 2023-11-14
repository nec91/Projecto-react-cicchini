import React from 'react'
import ReactDOM from 'react-dom/client'
import * as bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { App } from './App'
import { initializeFirebase } from './firebase/config'

initializeFirebase()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
