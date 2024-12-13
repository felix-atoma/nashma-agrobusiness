import React from "react";
import { FaSeedling, FaShippingFast, FaChalkboardTeacher, FaHandsHelping } from "react-icons/fa";

const About = () => {
  // Full-width image container style
  const fullWidthImageContainerStyle = {
    width: "100%",
    height: "90vh",
    overflow: "hidden",
    position: "relative", // Relative positioning for the absolute text container
  };

  // Full-width image style
  const fullWidthImageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  // Text container style for the first image
  const textContainerOnImageStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)", // Centers the text
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "3rem",
    zIndex: 10,
  };

  // Responsive container style for the text and image section
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap", // Enable wrapping for smaller screens
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: "2rem 0",
  };

  // Responsive image container style
  const imageContainerStyle = {
    width: "100%",
    maxWidth: "600px", // Restrict image width on larger screens
    height: "300px", // Fixed height for responsive scaling
    overflow: "hidden",
    position: "relative",
    margin: "1rem 0", // Add margin for spacing on small screens
  };

  // Image style with object fit and positioning
  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  };

  // Responsive text container style
  const textContainerStyle = {
    width: "100%",
    maxWidth: "600px", // Match image width
    padding: "1rem",
    textAlign: "left",
  };

  // Heading style
  const headingStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "1.5rem",
    color: "#4A4A4A",
  };

  // Point container style for icons and text
  const pointContainerStyle = {
    display: "flex",
    alignItems: "flex-start",
    gap: "1rem",
    marginBottom: "1.5rem",
  };

  // Icon style
  const iconStyle = {
    fontSize: "2rem",
    color: "#71B34A",
  };

  // Text style
  const textStyle = {
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "#4A4A4A",
  };

  // Button style
  const buttonStyle = {
    marginTop: "auto",
    padding: "0.8rem 1.5rem",
    backgroundColor: "#71B34A",
    color: "#FFFFFF",
    fontSize: "1rem",
    fontWeight: "bold",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "transform 0.3s ease",
    width: "100%",
  };

  return (
    <div style={{ overflowX: "hidden" }}>
      {/* Full-width image */}
      <div style={fullWidthImageContainerStyle}>
        <img
          src="/20241112_170250.jpg"
          alt="NASHMA banner"
          style={fullWidthImageStyle}
        />
        <div style={textContainerOnImageStyle}>
          Imagine a world where waste becomes wealth.
        </div>
      </div>

      {/* Add a gap between sections */}
      <div style={{ height: "2rem", backgroundColor: "#FFFFFF" }}></div>

      {/* Full-page width: photo on the left, text on the right */}
      <div style={containerStyle}>
        {/* Left Image */}
        <div style={imageContainerStyle}>
          <img
            src="/20241128_150316.jpg"
            alt="NASHMA process"
            style={imageStyle}
          />
        </div>

        {/* Right Text */}
        <div style={textContainerStyle}>
          <h2 style={headingStyle}>Empowering Communities Through Innovation</h2>
          <div style={pointContainerStyle}>
            <FaHandsHelping style={iconStyle} />
            <p style={textStyle}>
              At NASHMA, we empower women, young people, and individuals with disabilities to turn cocoa waste into wealth by converting cocoa pods into potash and connecting them with direct markets.
            </p>
          </div>
          <div style={pointContainerStyle}>
            <FaChalkboardTeacher style={iconStyle} />
            <p style={textStyle}>
              We provide training and set up processing facilities, ensuring our beneficiaries can focus on production without the burden of searching for buyers.
            </p>
          </div>
          <div style={pointContainerStyle}>
            <FaSeedling style={iconStyle} />
            <p style={textStyle}>
              Potash produced by our communities is used in industries such as black soap production, water treatment, and food preservation.
            </p>
          </div>
          <div style={pointContainerStyle}>
            <FaShippingFast style={iconStyle} />
            <p style={textStyle}>
              We handle logistics and ensure the processed potash reaches diverse industries, enabling sustainable income for our partners.
            </p>
          </div>

          {/* Read More About Us Button */}
          <button
            style={buttonStyle}
            onClick={() => console.log("Navigating to more about us...")}
          >
            Read More About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
