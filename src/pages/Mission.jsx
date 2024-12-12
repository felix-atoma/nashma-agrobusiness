import React from "react";
import { FaSeedling, FaHandsHelping, FaBullhorn, FaHandshake, FaShoppingCart, FaGlobeAfrica } from "react-icons/fa";

const Mission = () => {
  const info = [
    {
      title: "Our Vision",
      content: "Unlock the potential of young people and women in sustainable agriculture, drive growth and prosperity.",
      icon: <FaSeedling />,
    },
    {
      title: "Our Mission",
      content:
        "Empower young people and women in agriculture through skills training and direct market access, enabling them to thrive.",
      icon: <FaHandsHelping />,
    },
  ];

  const otherGoals = [
    {
      title: "Awareness",
      content:
        "To create brand visibility and educate the audience about NASHMA’s services (training and marketing of potash).",
      icon: <FaBullhorn />,
    },
    {
      title: "Engagement",
      content: "To build trust with followers by providing valuable content.",
      icon: <FaHandshake />,
    },
    {
      title: "Conversion",
      content: "Drive inquiries for training programs and potash sales through all social media platforms.",
      icon: <FaShoppingCart />,
    },
    {
      title: "Global Impact",
      content:
        "Promote sustainable agricultural practices worldwide, ensuring environmental conservation and economic empowerment.",
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
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
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
    cursor: "pointer",
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
      <h1 style={titleStyle}>Empowering Agriculture: Our Goals and Vision</h1>
      <div style={gridStyle}>
        {info.map((item, index) => (
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
      <h2 style={titleStyle}>Other Goals</h2>
      <div style={gridStyle}>
        {otherGoals.map((goal, index) => (
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
            <div style={iconStyle}>{goal.icon}</div>
            <h2 style={cardTitleStyle}>{goal.title}</h2>
            <p style={cardContentStyle}>{goal.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mission;
