import React from "react";
import {
  FaSeedling,
  FaHandsHelping,
  FaBullhorn,
  FaHandshake,
  FaShoppingCart,
  FaGlobeAfrica,
} from "react-icons/fa";

const Mission = () => {
  const missionCards = [
    {
      title: "Empowering Youth",
      content:
        "Provide young people with skills and opportunities to thrive in sustainable agriculture.",
      icon: <FaSeedling />,
    },
    {
      title: "Empowering Women",
      content:
        "Support women in agriculture with training and market access for economic independence.",
      icon: <FaHandsHelping />,
    },
    {
      title: "Awareness",
      content:
        "Create brand visibility and educate about sustainable agricultural practices.",
      icon: <FaBullhorn />,
    },
    {
      title: "Engagement",
      content: "Build trust by providing valuable content and fostering connections.",
      icon: <FaHandshake />,
    },
    {
      title: "Market Access",
      content: "Facilitate direct market access to drive inquiries and increase sales.",
      icon: <FaShoppingCart />,
    },
    {
      title: "Global Impact",
      content:
        "Promote sustainable agricultural practices worldwide for a better future.",
      icon: <FaGlobeAfrica />,
    },
  ];

  const containerStyle = {
    backgroundColor: "#f7fafc",
    padding: "2rem 1rem",
  };

  const titleStyle = {
    textAlign: "center",
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#38a169",
    marginBottom: "2rem",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "1.5rem",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const cardStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "1.5rem",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    textAlign: "center",
  };

  const cardHoverStyle = {
    transform: "translateY(-5px) scale(1.05)",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
  };

  const iconStyle = {
    fontSize: "2.5rem",
    color: "#2f855a",
    marginBottom: "1rem",
  };

  const cardTitleStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#2f855a",
    marginBottom: "1rem",
  };

  const cardContentStyle = {
    fontSize: "1rem",
    color: "#4a5568",
    lineHeight: "1.5",
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Our Mission</h1>
      <div style={gridStyle}>
        {missionCards.map((item, index) => (
          <div
            key={index}
            style={cardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = cardHoverStyle.transform;
              e.currentTarget.style.boxShadow = cardHoverStyle.boxShadow;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = cardStyle.boxShadow;
            }}
          >
            <div style={iconStyle}>{item.icon}</div>
            <h2 style={cardTitleStyle}>{item.title}</h2>
            <p style={cardContentStyle}>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mission;
