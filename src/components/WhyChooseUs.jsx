import React, { useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { FaHandsHelping, FaLightbulb, FaSeedling } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const WhyChooseUs = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/about");
      setLoading(false);
    }, 1000);
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
            In rural Ghanaian cocoa communities, women and youth face idle
            months during off-seasons, while 70-90% of cocoa pods rot, harming
            environments and health.
          </p>
          <p style={paragraphStyle}>
            Our innovative solution empowers women and youth to transform cocoa
            waste into valuable potash, generating income and sustainability.
          </p>

          <ul style={benefitsListStyle}>
            <li style={listItemStyle}>
              <FaHandsHelping style={iconStyle} /> Economic opportunities for
              marginalized groups.
            </li>
            <li style={listItemStyle}>
              <FaLightbulb style={iconStyle} /> Reduced environmental hazards.
            </li>
            <li style={listItemStyle}>
              <FaSeedling style={iconStyle} /> Sustainable cocoa production.
            </li>
          </ul>

          <p style={paragraphStyle}>
            Join Nashma Agribusiness in unlocking cocoa waste potential,
            transforming rural livelihoods.
          </p>

          <button
            style={buttonStyle}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#38A169")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#71B34A")}
            onClick={handleButtonClick}
          >
            <FiPhoneCall style={{ marginRight: "8px" }} />
            (+233) 0545086577/0243241649
          </button>
        </div>
        <div style={imageContentStyle}>
          <img
            src="/20241112_165130.jpg"
            alt="Agribusiness Illustration"
            style={imageStyle}
          />
        </div>
      </div>
    </>
  );
};

// Styles
const containerStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "2rem",
  backgroundColor: "#FFFFFF",
  height: "100vh",
  boxSizing: "border-box",
  gap: "1.5rem",
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

const benefitsListStyle = {
  listStyleType: "none",
  padding: 0,
  margin: "1rem 0",
};

const listItemStyle = {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  fontSize: "1rem",
  color: "#333333",
  marginBottom: "0.5rem",
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

const iconStyle = {
  fontSize: "1.5rem",
  color: "#38A169",
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
  border: "5px solid #38A169",
  borderRadius: "50%",
  borderTopColor: "transparent",
  animation: "spin 1s linear infinite",
};

const logoStyle = {
  height: "50px",
  width: "50px",
};

// Add media queries for responsiveness
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  @media (max-width: 768px) {
    .container {
      flex-direction: column;
      padding: 1rem;
      height: auto;
    }
    .text-content {
      padding-right: 0;
      text-align: center;
    }
    .heading {
      font-size: 2rem;
    }
    .image-content {
      margin-top: 1rem;
    }
  }
  @media (max-width: 480px) {
    .heading {
      font-size: 1.5rem;
    }
    .button {
      font-size: 0.875rem;
      padding: 0.5rem 1rem;
    }
  }
`;
document.head.appendChild(styleSheet);

export default WhyChooseUs;
