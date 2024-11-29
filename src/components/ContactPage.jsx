import React from "react";

const ContactPage = () => {
  const containerStyle = {
    backgroundColor: "white",
    padding: "2rem",
    boxSizing: "border-box",
  };

  const sectionStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
    flexWrap: "wrap", // Enable wrapping for responsive design
    gap: "2rem", // Add space between sections
  };

  const leftSectionStyle = {
    color: "#333",
    textAlign: "left",
    width: "100%",
    maxWidth: "500px",
    flex: "1 1 auto", // Allow flexibility in size
  };

  const rightSectionStyle = {
    width: "100%",
    maxWidth: "500px",
    flex: "1 1 auto",
  };

  const buttonStyle = {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "12px 24px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
  };

  const buttonHoverStyle = {
    backgroundColor: "#45a049",
  };

  const imgStyle = {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const responsiveStyles = `
@media (max-width: 768px) {
  .contact-container {
    padding: 1rem;
  }

  .contact-section {
    flexDirection: column;
    alignItems: center;
    textAlign: center;
  }

  .contact-button {
    fontSize: 14px;
    padding: 10px 20px;
  }

  .contact-text {
    fontSize: 14px;
  }

  .contact-image {
    maxWidth: 400px;
  }
}

@media (max-width: 480px) {
  .contact-section {
    gap: 1rem;
  }

  .contact-button {
    fontSize: 12px;
  }

  .contact-text {
    fontSize: 12px;
  }
}
`;

  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = responsiveStyles;
  document.head.appendChild(styleSheet);

  return (
    <div className="contact-container" style={containerStyle}>
      <div className="contact-section" style={sectionStyle}>
        {/* Left Section - Image */}
        <div style={rightSectionStyle}>
          <img
            src="src/assets/about3.png" // Replace with your actual image path
            alt="Agriculture"
            className="contact-image"
            style={imgStyle}
          />
        </div>

        {/* Right Section - Contact Information */}
        <div style={leftSectionStyle}>
          <h2 style={{ fontSize: "24px", fontWeight: "600" }}>Contact Us</h2>
          <p className="contact-text" style={{ fontSize: "16px", fontWeight: "500" }}>
            Get in touch with us for any inquiries or assistance.
          </p>
          <div style={{ marginTop: "16px" }}>
            <p>
              <span style={{ fontWeight: "600" }}>Phone:</span> (10) 892-293 2678
            </p>
            <p>
              <span style={{ fontWeight: "600" }}>Email:</span>{" "}
              <a
                href="mailto:contact@agrica.com"
                style={{ color: "#1E40AF", textDecoration: "underline" }}
              >
                contact@agrica.com
              </a>
            </p>
            <p>
              <span style={{ fontWeight: "600" }}>Address:</span> 768/A, Green
              Lane 790, Max Town, New York
            </p>
          </div>
          <div style={{ marginTop: "24px" }}>
            <button
              className="contact-button"
              onClick={() => window.location.href = "/contact"}
              style={buttonStyle}
              onMouseOver={(e) =>
                (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)
              }
              onMouseOut={(e) =>
                (e.target.style.backgroundColor = buttonStyle.backgroundColor)
              }
            >
              Drop Your Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
