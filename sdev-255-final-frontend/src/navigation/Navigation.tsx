// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import Home from '../pages/Home';
import MySchedule from '../pages/MySchedule';
import UpdateSchedule from '../pages/UpdateSchedule';   
import ViewCourses from '../pages/ViewCourses';

const Navigation = () => {
  return (
    <Router>
      <div className='navbar'>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-schedule" element={<MySchedule />} />
        <Route path="/update-schedule" element={<UpdateSchedule />} />
        <Route path="/view-courses" element={<ViewCourses />} />
      </Routes>
    </Router>
  );
};

export default Navigation;