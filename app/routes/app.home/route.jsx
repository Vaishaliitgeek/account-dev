import React from 'react';
import './route.css';
import Navbar from '../Components/Navbar/Navbar';
import Sidebar from '../Components/Sidebar/Sidebar';
import Content from '../Components/Content/Content';

const Route = () => {
  return (
    <>
      <Navbar />
      <div className="main-divv">
        <div className="sidebar-div">
          <Sidebar />
        </div>
        <div className="content-div">
          <Content />
        </div>
      </div>
    </>
  );
};

export default Route;
