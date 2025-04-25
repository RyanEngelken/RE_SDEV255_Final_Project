// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import ViewCourses from '../pages/Home';
import MySchedule from '../pages/MySchedule';
import UpdateSchedule from '../pages/UpdateSchedule';   
import InstructorView from '../pages/InstructorView';

const Navigation = () => {
  return (
    <Router>
      <div className='navbar'>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<ViewCourses />} />
        <Route path="/my-schedule" element={<MySchedule />} />
        <Route path="/update-schedule" element={<UpdateSchedule />} />
        <Route path="/instructor-view" element={<InstructorView />} />
      </Routes>
    </Router>
  );
};

export default Navigation;