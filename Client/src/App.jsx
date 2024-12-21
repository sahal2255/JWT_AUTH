import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import UserRoute from './routes/UserRoute';

function App() {
  return (
    <BrowserRouter>
      <UserRoute />
    </BrowserRouter>
  );
}

export default App;
