import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Profile from '../pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact="true" path="register" element={<Register />} />
          <Route exact="true" path="login" element={<Login />} />
          <Route exact="true" path="profile" element={<Profile />} />
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
