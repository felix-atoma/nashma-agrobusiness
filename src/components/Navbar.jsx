import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  const [loading, setLoading] = useState(false);

  const navStyle = {
    backgroundColor: "white",
    color: "#38a169",
    padding: "1rem",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    width: "100%",
    position: "relative",
    zIndex: "10",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  };

  const ulStyle = {
    display: "flex",
    listStyleType: "none",
    padding: "0",
    margin: "0",
    gap: "2.5rem",
    alignItems: "center",
  };

  const linkStyle = {
    color: "#38a169",
    textDecoration: "none",
    fontWeight: "bold",
    position: "relative",
    padding: "0.5rem 0",
  };

  const linkHoverBarStyle = {
    position: "absolute",
    bottom: "-5px",
    right: "0",
    height: "3px",
    backgroundColor: "#38a169",
    width: "0%",
    transition: "width 0.3s ease-in-out",
  };

  const phoneContainerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    backgroundColor: "#38a169",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    color: "white",
  };

  const spinnerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "white",
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    zIndex: "100",
  };

  const logoContainerStyle = {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100px",
    width: "100px",
  };

  const ringStyle = {
    position: "absolute",
    top: "0",
    left: "0",
    height: "100%",
    width: "100%",
    border: "5px solid #38a169",
    borderRadius: "50%",
    borderTopColor: "transparent",
    animation: "spin 1s linear infinite",
  };

  const logoStyle = {
    height: "50px",
    width: "50px",
  };

  const handleNavigation = (path) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false); // Simulate navigation completion
    }, 1000); // Simulate a 1-second load time
  };

  return (
    <>
      {loading && (
        <div style={spinnerStyle}>
          <div style={logoContainerStyle}>
            <img
              src="/path-to-logo.png" // Replace with your logo path
              alt="Logo"
              style={logoStyle}
            />
            <div style={ringStyle}></div>
          </div>
        </div>
      )}
      <nav style={navStyle}>
        <div style={containerStyle}>
          {/* Logo Section */}
          <img
            src="/path-to-logo.png" // Replace with your logo path
            alt="Logo"
            style={{ height: "50px", marginRight: "1rem" }}
          />
          {/* Navigation Links */}
          <ul style={ulStyle}>
            {["Home", "About", "Services", "Blog", "Contact"].map((text, index) => (
              <li key={index} style={{ position: "relative" }}>
                <Link
                  to={`/${text.toLowerCase()}`}
                  style={linkStyle}
                  onClick={() => handleNavigation(`/${text.toLowerCase()}`)}
                  onMouseEnter={(e) =>
                    (e.target.querySelector(".hover-bar").style.width = "100%")
                  }
                  onMouseLeave={(e) =>
                    (e.target.querySelector(".hover-bar").style.width = "0%")
                  }
                >
                  {text}
                  <span
                    className="hover-bar"
                    style={linkHoverBarStyle}
                  ></span>
                </Link>
              </li>
            ))}
          </ul>
          {/* Contact Number */}
          <div style={phoneContainerStyle}>
            <FaPhoneAlt />
            <span>+233 123 456 789</span>
          </div>
        </div>
      </nav>

      {/* CSS for Spinner */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </>
  );
};

export default Navbar;
