import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleNavigation = (path) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false); // Simulate navigation completion
    }, 1000); // Simulate a 1-second load time
  };

  const navStyle = {
    backgroundColor: "white",
    color: "#38a169",
    padding: "1rem",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1000, // Ensure Navbar is above content
  };
  
  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "1rem",
  };

  const ulStyle = {
    display: "flex",
    listStyleType: "none",
    padding: "0",
    margin: "0",
    gap: "1rem",
    alignItems: "center",
  };

  const linkStyle = {
    color: "#38a169",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "1rem",
    padding: "0.5rem",
    position: "relative",
  };

  const hoverBarStyle = {
    position: "absolute",
    bottom: "-5px",
    left: "0",
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
    padding: "0.3rem 0.8rem",
    borderRadius: "4px",
    color: "white",
    flexShrink: "0",
  };

  const hamburgerStyle = {
    display: "none", // Default hidden
    fontSize: "1.5rem",
    cursor: "pointer",
    color: "#38a169",
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

  const mediaQuery = `
    @media (max-width: 768px) {
      .hamburger {
        display: block;
      }
      .nav-links {
        display: none; /* Hide navigation links by default on small screens */
        flex-direction: column;
        width: 100%;
        align-items: center;
      }
      .nav-links.open {
        display: flex; /* Show navigation links when menu is open */
      }
      .phone-container {
        order: -1;
        width: 100%;
        justify-content: center;
        margin-bottom: 1rem;
      }
    }

    @media (max-width: 375px) {
      .phone-container {
        padding: 0.2rem 0.5rem;
        font-size: 0.9rem;
      }
      .nav-links li {
        font-size: 0.9rem;
      }
    }
  `;

  return (
    <>
      {loading && (
        <div style={spinnerStyle}>
          <div style={logoContainerStyle}>
            <img
              src="/loder.png"
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
            src="/logo (2) (1).png"
            alt="Logo"
            style={{ height: "40px", marginRight: "1rem" }}
          />

          {/* Hamburger Icon */}
          <FaBars
            className="hamburger"
            style={hamburgerStyle}
            onClick={() => setMenuOpen(!menuOpen)}
          />

          {/* Navigation Links */}
          <ul
            className={`nav-links ${menuOpen ? "open" : ""}`}
            style={ulStyle}
          >
            {["Home", "About", "Services", "Blog", "Contact"].map((text, index) => (
              <li key={index} style={{ position: "relative" }}>
                <Link
                  to={text === "Home" ? "/" : `/${text.toLowerCase()}`}
                  style={linkStyle}
                  onClick={() => {
                    setMenuOpen(false);
                    handleNavigation(text === "Home" ? "/" : `/${text.toLowerCase()}`);
                  }}
                  onMouseEnter={(e) =>
                    (e.target.querySelector(".hover-bar").style.width = "100%")
                  }
                  onMouseLeave={(e) =>
                    (e.target.querySelector(".hover-bar").style.width = "0%")
                  }
                >
                  {text}
                  <span className="hover-bar" style={hoverBarStyle}></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Contact Number */}
          <div className="phone-container" style={phoneContainerStyle}>
            <FaPhoneAlt />
            <span>+233 123 456 789</span>
          </div>
        </div>
      </nav>

      {/* CSS for Spinner and Media Queries */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          ${mediaQuery}
        `}
      </style>
    </>
  );
};

export default Navbar;
