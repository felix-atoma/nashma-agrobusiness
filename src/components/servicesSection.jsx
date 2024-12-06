import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";

const ServicesSection = () => {
  const navigate = useNavigate();

  const services = [
    {
      image: "/20241126_165204.jpg", // Replace with actual image path for potash production
      title: "Potash Production",
      description:
        "We specialize in producing high-quality potash for agricultural and industrial use.",
      servicePath: "/services/potash-production",
    },
    {
      image: "/20241126_165239.jpg", // Replace with actual image path for bulk supply
      title: "Global Bulk Supply",
      description:
        "We ensure the efficient global supply of bulk products to meet diverse needs.",
      servicePath: "/services/global-bulk-supply",
    },
  ];

  const handleButtonClick = (servicePath) => {
    navigate(servicePath); // Navigate to the specific service page
  };

  return (
    <div
      style={{
        padding: "40px 20px",
        backgroundColor: "#f7fafc",
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          color: "#2d3748",
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        Services We Provide
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", // Responsive grid layout
          gap: "20px",
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#d4edda", // Light green background for the entire card
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
              alignItems: "center",
              marginBottom: "20px",
              flexWrap: "wrap", // Ensure wrapping for smaller screens
            }}
          >
            {/* Image */}
            <div style={{ flex: "1 1 100px", maxWidth: "100%" }}>
              <img
                src={service.image}
                alt={service.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* Content */}
            <div
              style={{
                flex: "1 1 300px", // Allow the text to take up space while remaining responsive
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                minWidth: "250px", // Ensure a minimum width for text content
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  color: "#2d3748",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  color: "#4a5568",
                  fontSize: "1rem",
                  marginBottom: "16px",
                }}
              >
                {service.description}
              </p>
              <button
                onClick={() => handleButtonClick(service.servicePath)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 20px",
                  backgroundColor: "#71B34A",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#4A8A34")
                }
                onMouseOut={(e) =>
                  (e.target.style.backgroundColor = "#71B34A")
                }
              >
                <FaPhoneAlt />
                Get This Service
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
