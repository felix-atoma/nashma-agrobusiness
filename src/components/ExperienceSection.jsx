import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";

const ExperienceSection = () => {
  const [loading, setLoading] = useState(false);

  // Function to handle the button click, show spinner, and navigate
  const handleClick = () => {
    setLoading(true); // Start the spinner animation
    setTimeout(() => {
      setLoading(false); // Stop the spinner
      window.location.href = "/about"; // Navigate to the About page
    }, 1500); // 1.5 seconds delay for the spinner to show
  };

  return (
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
          src="src/assets/about1.png" // Replace with the actual image path
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
  );
};

export default ExperienceSection;
