import React from "react";
import { FaSeedling, FaShippingFast, FaChalkboardTeacher, FaHandsHelping } from "react-icons/fa";

const About = () => {
  // Full-width image container style
  const fullWidthImageContainerStyle = {
    width: "100vw",
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
    textAlign: "center", // Center text horizontally
    fontWeight: "bold", // Make text very bold
    fontSize: "3rem", // Increase the font size for emphasis
    zIndex: 10, // Ensure it appears above the image
  };

  // Container for text and image
  const containerStyle = {
    display: "flex",
    width: "100vw",
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: "2rem 0",
  };

  // Image container style with reduced height
  const imageContainerStyle = {
    width: "50vw", // Half the width of the viewport
    height: "44vw", // Reduced height for the image
    overflow: "hidden", // Hide overflow to keep the image contained within the bounds
    position: "relative",
  };

  // Image style with object fit and positioning
  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover", // Ensure the image fills the container
    objectPosition: "top", // Focus on the top of the image to show the head
  };

  // Text container style
  const textContainerStyle = {
    width: "50vw",
    padding: "2rem",
    textAlign: "left",
    backgroundColor: "", 
    marginTop:"",
  };

  // Heading style
  const headingStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "1.5rem",
    color: "#4A4A4A",
  };

  // Point container style for the icons and text
  const pointContainerStyle = {
    display: "flex",
    alignItems: "flex-start",
    gap: "1rem",
    marginBottom: "1.5rem",
  };

  // Icon style
  const iconStyle = {
    fontSize: "2rem",
    color: "#71B34A", // A green color for sustainability
  };

  // Text style
  const textStyle = {
    fontSize: "1.1rem",
    lineHeight: "1.6",
    color: "#4A4A4A",
  };

  // Button style
  const buttonStyle = {
    marginTop: "auto", // Push button to the bottom of the text container
    padding: "0.8rem 1.5rem",
    backgroundColor: "#71B34A", // Button green color
    color: "#FFFFFF",
    fontSize: "1rem",
    fontWeight: "bold",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "transform 0.3s ease", // Smooth transition for hover effect
  };

  return (
    <>
      {/* Full-width image */}
      <div style={fullWidthImageContainerStyle}>
        <img
          src="/20241112_170250.jpg"
          alt="NASHMA banner"
          style={fullWidthImageStyle}
        />
        {/* About text in the center of the image */}
        <div style={textContainerOnImageStyle}>
          Imagine a world where waste becomes wealth. I'm Malik from Nashma Agribusiness Ltd.
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
    </>
  );
};

export default About;
