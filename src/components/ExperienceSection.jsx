import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";

const ExperienceSection = () => {
  const [loading, setLoading] = useState(false);

  // Function to handle the button click, show spinner, and navigate
  const handleClick = () => {
    setLoading(true); // Start the spinner animation
    setTimeout(() => {
      setLoading(false); // Stop the spinner
      window.location.href = "/about"; // Navigate to the About page
    }, 1000); // Simulate a 1-second load time for the spinner to show
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

  return (
    <>
      {loading && (
        <div style={spinnerStyle}>
          <div style={logoContainerStyle}>
            <img
              src="src/assets/loder.png"
              alt="Logo"
              style={logoStyle}
            />
            <div style={ringStyle}></div>
          </div>
        </div>
      )}
      <section
        style={{
          display: "flex",
          alignItems: "center",
          padding: "40px",
          backgroundColor: "#f7fafc",
        }}
      >
        {/* Image Section */}
        <div
          style={{
            flex: 1,
            marginRight: "20px",
          }}
        >
          <img
            src="/20241112_164309.jpg" // Replace with the actual image path
            alt="Experience"
            style={{
              width: "100%",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          />
        </div>

        {/* Text Section */}
        <div
          style={{
            flex: 1,
            textAlign: "left",
            color: "#2d3748",
          }}
        >
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              marginBottom: "16px",
            }}
          >
            Over 10 Years of Experience
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.6",
              marginBottom: "24px",
            }}
          >
            With a decade of dedication to sustainable agriculture, we continue
            to support farmers and empower communities. Learn more about our
            journey and commitment.
          </p>
          <button
            onClick={handleClick}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "12px 20px",
              backgroundColor: "#71B34A",
              color: "#fff",
              fontSize: "1rem",
              fontWeight: "bold",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor = "#4e8b36") // Deep green on hover
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "#71B34A") // Light green on leave
            }
          >
            {/* Spinner around the logo if loading */}
            <div
              style={{
                position: "relative",
                display: "inline-block",
                marginRight: "10px",
              }}
            >
              {loading && (
                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "30px",
                    height: "30px",
                    border: "4px solid #f3f3f3", // Light gray
                    borderTop: "4px solid #fff", // White spinner
                    borderRadius: "50%",
                    animation: "spin 1s linear infinite", // Spin animation
                  }}
                ></div>
              )}
              <FaPhoneAlt style={{ fontSize: "20px" }} />
            </div>
            More About Us
          </button>
        </div>
      </section>
    </>
  );
};

export default ExperienceSection;
