import React from "react";
import {
  FaSeedling,
  FaShippingFast,
  FaChalkboardTeacher,
  FaHandsHelping,
} from "react-icons/fa";

const About = () => {
  const styles = {
    fullWidthImageContainer: {
      width: "100%",
      height: "90vh",
      overflow: "hidden",
      position: "relative",
    },
    fullWidthImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    textContainerOnImage: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      color: "#FFFFFF",
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "3rem",
      zIndex: 10,
    },
    container: {
      display: "flex",
      flexWrap: "wrap",
      width: "100%",
      alignItems: "flex-start",
      justifyContent: "space-between",
      padding: "2rem 0",
    },
    imageContainer: {
      flex: "1 1 45%", // Adjust width
      maxWidth: "45%", // Control the photo's size
      height: "44vw",
      overflow: "hidden",
      position: "relative",
      marginRight: "2rem", // Adds a gap between photo and text
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "top",
    },
    textSection: {
      flex: "1 1 50%", // Adjust width
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      gap: "2rem",
    },
    heading: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      marginBottom: "1.5rem",
      color: "#4A4A4A",
    },
    textContainer: {
      fontSize: "1.2rem",
      lineHeight: "1.8",
      color: "#4A4A4A",
    },
    button: {
      padding: "0.8rem 2rem",
      fontSize: "1rem",
      color: "#FFFFFF",
      backgroundColor: "#4CAF50",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      alignSelf: "flex-start",
    },
    buttonHover: {
      backgroundColor: "#45A049",
    },
  };

  return (
    <div style={{ overflowX: "hidden" }}>
      {/* Full-width image */}
      <div style={styles.fullWidthImageContainer}>
        <img
          src="/20241112_170250.jpg"
          alt="NASHMA banner"
          style={styles.fullWidthImage}
        />
        <div style={styles.textContainerOnImage}>
          Imagine a world where waste becomes wealth.
        </div>
      </div>

      {/* Gap */}
      <div style={{ height: "2rem", backgroundColor: "#FFFFFF" }}></div>

      {/* Photo and Text Section */}
      <div style={styles.container}>
        {/* Left Image */}
        <div style={styles.imageContainer}>
          <img
            src="/20241128_150316.jpg"
            alt="NASHMA process"
            style={styles.image}
          />
        </div>

        {/* Right Text Section */}
        <div style={styles.textSection}>
          {/* Main Text */}
          <div>
            <h2 style={styles.heading}>Empowering Communities Through Innovation</h2>
            <p style={styles.textContainer}>
              At NASHMA, we empower women, young people, and individuals with
              disabilities to turn cocoa waste into wealth by converting cocoa pods
              into potash and connecting them with direct markets. Potash is a key
              component for various industries, ensuring sustainable income for
              our partners.
            </p>
          </div>

          {/* "Read More About Us" Button */}
          <button style={styles.button}>
            Read More About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
