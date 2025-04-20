import  { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      {}
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Navbar links */}
      <ul className={menuOpen ? 'show' : ''}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/my-schedule">My Schedule</Link>
        </li>
        <li>
          <Link to="/update-schedule">Update Schedule</Link>
        </li>
        <li>
          <Link to="/view-courses">View Courses</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
