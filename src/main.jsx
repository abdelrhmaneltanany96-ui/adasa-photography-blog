import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
/*
 * React-router-dom
 *
 * - A library used to handle navigation in React applications.
 * - Allows us to create multiple pages without full page reloads.
 * - Connects URL paths to specific React components.
 * - Supports dynamic routes and nested routes.
 */
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  /*
 * React.StrictMode
 *
 * - Helps identify potential problems in a React application.
 * - Enables additional checks and warnings for its child components.
 * - Does not render any visible UI or extra HTML elements.
 * - May render components twice in development to detect potential bugs.
 * - Only performs these extra checks in development mode, not production.
 * - It is optional but recommended for writing cleaner and safer React code.
 */
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


