// src/components/BaseLayout.jsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from './Component/navbar/Navbar';
import BackgroundVideo from './Component/BackgroundVideo';

const BaseLayout = ({ children }) => {
  return (
    <div>
      <Navbar>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </Navbar>
      <main>
      
        
        {children}</main>
      <footer>
        <p><Outlet></Outlet></p>
      </footer>
    </div>
  );
};

export default BaseLayout;
