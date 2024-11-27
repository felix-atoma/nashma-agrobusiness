import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";

const ExperienceSection = () => {
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
          src="/path-to-image.jpg" // Replace with the actual image path
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
        <Link to="/about">
          <button
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
            <FaPhoneAlt style={{ marginRight: "10px" }} />
            More About Us
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ExperienceSection;
