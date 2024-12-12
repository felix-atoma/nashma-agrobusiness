import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  const [loading, setLoading] = useState(false);

  // Update screen size state on window resize
  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    width: "100vw",
    zIndex: 1000,
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
    display: isSmallScreen ? (menuOpen ? "flex" : "none") : "flex",
    flexDirection: isSmallScreen ? "column" : "row",
    listStyleType: "none",
    padding: 0,
    margin: 0,
    gap: "1rem",
    alignItems: isSmallScreen ? "center" : "flex-start",
    width: isSmallScreen ? "100%" : "auto",
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
  };

  const hamburgerStyle = {
    display: isSmallScreen ? "block" : "none",
    fontSize: "1.5rem",
    cursor: "pointer",
    color: "#38a169",
  };

  return (
    <>
      {loading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "white",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 100,
          }}
        >
          <div>
            <img
              src="/nashma-removebg-preview.png"
              alt="Logo"
              style={{ height: "80px", width: "80px" }}
            />
          </div>
        </div>
      )}
      <nav style={navStyle}>
        <div style={containerStyle}>
          {/* Logo Section */}
          <img
            src="/nashma-removebg-preview.png"
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
          <ul style={ulStyle}>
            {["Home", "About", "Services", "Mission", "Contact"].map((text, index) => (
              <li key={index} style={{ position: "relative" }}>
                <Link
                  to={text === "Home" ? "/" : `/${text.toLowerCase()}`}
                  style={linkStyle}
                  onClick={() => {
                    if (isSmallScreen) setMenuOpen(false);
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
            <span>(+233) 0545086577/0243241649</span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
