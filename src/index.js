import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDRGhI090xBM4nn6Yv_gITFIkk5_a2b1gI",
  authDomain: "tobinstrumentos.firebaseapp.com",
  projectId: "tobinstrumentos",
  storageBucket: "tobinstrumentos.appspot.com",
  messagingSenderId: "250532664195",
  appId: "1:250532664195:web:e1b465f03ce7d6b386dcb6"
};

// Initialize Firebase
 initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
