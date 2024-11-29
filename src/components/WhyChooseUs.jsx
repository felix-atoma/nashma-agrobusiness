import React, { useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const WhyChooseUs = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/about"); // Navigate after the simulated loading
      setLoading(false);
    }, 1000); // Simulate a 1-second load time
  };

  return (
    <>
      {loading && (
        <div style={spinnerStyle}>
          <div style={logoContainerStyle}>
            <img
              src="src/assets/logo (2) (1).png"
              alt="Logo"
              style={logoStyle}
            />
            <div style={ringStyle}></div>
          </div>
        </div>
      )}
      <div style={containerStyle}>
        <div style={textContentStyle}>
          <h1 style={headingStyle}>Why you should choose us</h1>
          <p style={paragraphStyle}>
            Technological information and others, in addition to information about companies in the sector,
            list of any and all companies related to agribusiness.
          </p>
          <p style={paragraphStyle}>
            Technological information and others, in addition to information about companies.
          </p>
          <p style={paragraphStyle}>
            Technological information and others, in addition to information about companies.
          </p>
          <p style={paragraphStyle}>
            Technological information and others, in addition to information about companies.
          </p>
          <button
            style={buttonStyle}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#38A169")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#71B34A")}
            onClick={handleButtonClick}
          >
            <FiPhoneCall style={{ marginRight: "8px" }} />
            (10) 892-293 2678
          </button>
        </div>
        <div style={imageContentStyle}>
          <img
            src="src/assets/about2 (1).png"
            alt="Agribusiness Illustration"
            style={imageStyle}
          />
        </div>
      </div>
    </>
  );
};

const containerStyle = {
  display: "flex",
  flexDirection: "row", // Row layout for larger screens
  justifyContent: "space-between",
  alignItems: "center",
  padding: "2rem",
  backgroundColor: "#FFFFFF",
  height: "100vh",
  boxSizing: "border-box",
  gap: "1.5rem", // Space between text and image sections
};

const textContentStyle = {
  flex: 1,
  paddingRight: "2rem",
};

const headingStyle = {
  fontSize: "2.5rem",
  color: "#38A169",
  marginBottom: "1rem",
};

const paragraphStyle = {
  fontSize: "1rem",
  color: "#333333",
  marginBottom: "1rem",
  lineHeight: "1.6",
};

const buttonStyle = {
  display: "flex",
  alignItems: "center",
  backgroundColor: "#71B34A",
  color: "#FFFFFF",
  border: "none",
  borderRadius: "8px",
  padding: "0.75rem 1.5rem",
  fontSize: "1rem",
  fontWeight: "bold",
  cursor: "pointer",
  marginTop: "1rem",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  transition: "background-color 0.3s ease",
};

const imageContentStyle = {
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const imageStyle = {
  maxWidth: "100%",
  maxHeight: "80%",
  objectFit: "cover",
  borderRadius: "8px",
};

// Spinner Styles
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
  border: "5px solid #38A169",
  borderRadius: "50%",
  borderTopColor: "transparent",
  animation: "spin 1s linear infinite",
};

const logoStyle = {
  height: "50px",
  width: "50px",
};

// CSS for Spinner Animation
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
document.head.appendChild(styleSheet);

export default WhyChooseUs;
