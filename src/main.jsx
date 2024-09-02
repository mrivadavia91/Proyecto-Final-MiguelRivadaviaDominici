import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import { initializeApp } from "firebase/app"
import './index.css'

const firebaseConfig = {
  apiKey: "AIzaSyBWDZotgI1vOepCvuZaXZxRPeYd50JV2kw",
  authDomain: "proyecto-react-vite.firebaseapp.com",
  projectId: "proyecto-react-vite",
  storageBucket: "proyecto-react-vite.appspot.com",
  messagingSenderId: "204777481479",
  appId: "1:204777481479:web:9518f343f98d18372991a2"
};

initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
