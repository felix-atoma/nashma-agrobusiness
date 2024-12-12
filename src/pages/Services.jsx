import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: "potash-production",
      image: "/20241112_160941.jpg",
      title: "Potash Production",
      description:
        "We specialize in producing high-quality potash from cocoa pods, turning waste into wealth. Potash is used in various applications including black soap production, water treatment, and food preservation.",
    },
    {
      id: "global-bulk-supply",
      image: "/20241126_165239.jpg",
      title: "Global Bulk Supply",
      description:
        "We ensure the efficient global supply of bulk products, including potash, to meet diverse market needs. Our goal is to provide a direct market for producers without the hassle of searching for buyers.",
    },
    {
      id: "skills-training",
      image: "/20241112_162930.jpg",
      title: "Skills Training in Potash and African Black Soap",
      description:
        "Empowering communities with skills to produce potash and African black soap, fostering sustainable livelihoods and ensuring they can turn waste into wealth.",
    },
    {
      id: "sustainable-farming-workshops",
      image: "/20241112_163334.jpg",
      title: "Sustainable Farming Workshops",
      description:
        "Teaching modern and sustainable farming techniques to enhance productivity while protecting the environment. We aim to integrate these practices with potash production and market access.",
    },
  ];

  const handleButtonClick = (id) => {
    navigate(`/contact`); // Navigate to the dynamic route for the service
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
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {services.map((service) => (
          <div
            key={service.id}
            style={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#d4edda",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
              alignItems: "center",
              marginBottom: "20px",
              flexWrap: "wrap",
            }}
          >
            {/* Image */}
            <div style={{ flex: "1 1 100px", maxWidth: "100%", height: "150px" }}>
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
                flex: "1 1 300px",
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                minWidth: "250px",
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
                onClick={() => handleButtonClick(service.id)}
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
                Contact Us
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
