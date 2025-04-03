import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import "../styles/navbars/Navbar.css";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogOut = () => {
    logout();
    setIsMobileMenuOpen(false); // Close the mobile menu upon logout
  };

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="Navbar">
      <div className="left-section">
        <h1>
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
            Daily Diary
          </Link>
        </h1>
      </div>

      <div className="right-section">
        {user && (
          <div className="userDetails">
            <span className="username">{user.name}</span>{" "}
            <span className="lastName">{user.lastName}</span>
          </div>
        )}

        {/* Hamburger icon for mobile */}
        <button className="hamburger" onClick={toggleMenu}>
          &#9776;
        </button>

        <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            {user && user.role === "admin" && (
              <Link
                to="/admin-dashboard"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Admin dashboard
              </Link>
            )}
          </li>
          <li>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
              About
            </Link>
          </li>
        </ul>

        {!user ? (
          <ul className="no-user">
            <li>
              <Link to="/login">login</Link>
            </li>
            <li>
              <Link to="/signup">signup</Link>
            </li>
          </ul>
        ) : (
          <button className="btn-logout" onClick={handleLogOut}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
 