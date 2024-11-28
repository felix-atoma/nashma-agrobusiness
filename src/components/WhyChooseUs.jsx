import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { useNavigate } from "react-router-dom"; // For navigation

const WhyChooseUs = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/about"); // Redirects to the About page
  };

  return (
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
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#38A169")} // Gradual green hover
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
  );
};

const containerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "2rem",
  backgroundColor: "#FFFFFF",
  height: "100vh", // Full page height
  boxSizing: "border-box",
};

const textContentStyle = {
  flex: 1,
  paddingRight: "2rem",
};

const headingStyle = {
  fontSize: "2.5rem",
  color: "#38A169", // Green color
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
  backgroundColor: "#71B34A", // Default green color
  color: "#FFFFFF",
  border: "none",
  borderRadius: "8px",
  padding: "0.75rem 1.5rem",
  fontSize: "1rem",
  fontWeight: "bold",
  cursor: "pointer",
  marginTop: "1rem",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  transition: "background-color 0.3s ease", // Smooth transition for hover effect
};

const imageContentStyle = {
  flex: 1,
  display: "flex",
  justifyContent: "flex-end",
};

const imageStyle = {
  maxWidth: "100%",
  maxHeight: "80%",
  objectFit: "cover",
  borderRadius: "8px",
};

export default WhyChooseUs;
