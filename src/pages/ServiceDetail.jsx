import React from "react";
import { useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceId } = useParams();

  // Hardcoded data; Replace with API call or Context logic as needed
  const services = {
    "potash-production": {
      title: "Potash Production",
      description:
        "Detailed description of Potash Production service goes here.",
      image: "/20241126_165204.jpg",
    },
    "global-bulk-supply": {
      title: "Global Bulk Supply",
      description:
        "Detailed description of Global Bulk Supply service goes here.",
      image: "/20241126_165239.jpg",
    },
    "skills-training": {
      title: "Skills Training in Potash and African Black Soap",
      description:
        "Learn how to create potash and African black soap with step-by-step training.",
      image: "/20241126_165300.jpg",
    },
    "sustainable-farming-workshops": {
      title: "Sustainable Farming Workshops",
      description:
        "Join our workshops to learn cutting-edge, eco-friendly farming methods.",
      image: "/sustainable_farming_workshop.jpg",
    },
    "eco-friendly-packaging": {
      title: "Eco-Friendly Packaging Solutions",
      description:
        "Explore our sustainable packaging solutions for industrial needs.",
      image: "/eco_friendly_packaging.jpg",
    },
  };

  const service = services[serviceId];

  if (!service) {
    return <p>Service not found!</p>;
  }

  return (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          color: "#2d3748",
        }}
      >
        {service.title}
      </h1>
      <img
        src={service.image}
        alt={service.title}
        style={{
          maxWidth: "100%",
          height: "auto",
          margin: "20px 0",
        }}
      />
      <p
        style={{
          fontSize: "1.2rem",
          color: "#4a5568",
          lineHeight: "1.6",
        }}
      >
        {service.description}
      </p>
    </div>
  );
};

export default ServiceDetail;
