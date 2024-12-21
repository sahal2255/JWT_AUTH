import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserLayout from '../layouts/UserLayout';
import Home from '../pages/Home';
import Product from '../pages/Product';
import About from '../pages/About';
import Profile from '../pages/Profile';
import Login from '../pages/Login';

const UserRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />} />  
        <Route path="product" element={<Product />} />
        <Route path="about" element={<About />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default UserRoute;
