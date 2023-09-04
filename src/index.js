import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App.js';
import './index.css';
import { QuizProvider } from './Context/QuizContext.js';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QuizProvider>
    <App />
    </QuizProvider>
  </React.StrictMode>
)