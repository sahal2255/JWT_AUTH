import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const UserLayout = () => {
  return (
    <div className="layout">
      <Navbar /> {/* Navbar is common for all pages */}
      <main className="main-content">
        <Outlet /> {/* Child routes will be rendered here */}
      </main>
    </div>
  );
};

export default UserLayout;
