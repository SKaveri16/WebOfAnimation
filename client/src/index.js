import React from 'react'; // Keep only this import
import ReactDOM from 'react-dom/client';
import './index.css'; // Optional: your CSS file
import App from './app'; // Ensure this points to your App component
import reportWebVitals from './reportWebVitals';

// Render the App component into the root div in index.html
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