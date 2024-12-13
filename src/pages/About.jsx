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
      flex: "1 1 100%", // Default full width
      maxWidth: "50%", // Half width on larger screens
      height: "44vw",
      overflow: "hidden",
      position: "relative",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "top",
    },
    textContainer: {
      flex: "1 1 100%", // Default full width
      maxWidth: "50%", // Half width on larger screens
      padding: "2rem",
      textAlign: "left",
    },
    heading: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      marginBottom: "1.5rem",
      color: "#4A4A4A",
    },
    pointContainer: {
      display: "flex",
      alignItems: "flex-start",
      gap: "1rem",
      marginBottom: "1.5rem",
    },
    icon: {
      fontSize: "2rem",
      color: "#71B34A",
    },
    text: {
      fontSize: "1.1rem",
      lineHeight: "1.6",
      color: "#4A4A4A",
    },
    button: {
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
        {/* About text in the center of the image */}
        <div style={styles.textContainerOnImage}>
          Imagine a world where waste becomes wealth.
        </div>
      </div>

      {/* Add a gap between sections */}
      <div style={{ height: "2rem", backgroundColor: "#FFFFFF" }}></div>

      {/* Full-page width: photo on the left, text on the right */}
      <div style={styles.container}>
        {/* Left Image */}
        <div style={styles.imageContainer}>
          <img
            src="/20241128_150316.jpg"
            alt="NASHMA process"
            style={styles.image}
          />
        </div>

        {/* Right Text */}
        <div style={styles.textContainer}>
          <h2 style={styles.heading}>Empowering Communities Through Innovation</h2>
          <div style={styles.pointContainer}>
            <FaHandsHelping style={styles.icon} />
            <p style={styles.text}>
              At NASHMA, we empower women, young people, and individuals with
              disabilities to turn cocoa waste into wealth by converting cocoa
              pods into potash and connecting them with direct markets.
            </p>
          </div>
          <div style={styles.pointContainer}>
            <FaChalkboardTeacher style={styles.icon} />
            <p style={styles.text}>
              We provide training and set up processing facilities, ensuring
              our beneficiaries can focus on production without the burden of
              searching for buyers.
            </p>
          </div>
          <div style={styles.pointContainer}>
            <FaSeedling style={styles.icon} />
            <p style={styles.text}>
              Potash produced by our communities is used in industries such as
              black soap production, water treatment, and food preservation.
            </p>
          </div>
          <div style={styles.pointContainer}>
            <FaShippingFast style={styles.icon} />
            <p style={styles.text}>
              We handle logistics and ensure the processed potash reaches
              diverse industries, enabling sustainable income for our partners.
            </p>
          </div>

          {/* Read More About Us Button */}
          <button
            style={styles.button}
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