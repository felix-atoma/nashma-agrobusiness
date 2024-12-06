import React from "react";
import { FaSeedling, FaHandsHelping, FaBullhorn, FaHandshake, FaShoppingCart } from "react-icons/fa";

const Mission = () => {
  const info = [
    {
      title: "Our Vision",
      content: "Unlock the potential of young people and women in sustainable agriculture, drive growth and prosperity.",
      icon: <FaSeedling />,
      imgSrc: "/20241128_150316.jpg", // Replace with your image URL
    },
    {
      title: "Our Mission",
      content:
        "Empower young people and women in agriculture through skills training and direct market access, enabling them to thrive.",
      icon: <FaHandsHelping />,
      imgSrc: "/20241112_161106.jpg", // Replace with your image URL
    },
    {
      title: "Awareness",
      content:
        "To create brand visibility and educate the audience about NASHMA’s services (training and marketing of potash).",
      icon: <FaBullhorn />,
      imgSrc: "/first.jpg", // Replace with your image URL
    },
    {
      title: "Engagement",
      content: "To build trust with followers by providing valuable content.",
      icon: <FaHandshake />,
      imgSrc: "/20241112_164309.jpg", // Replace with your image URL
    },
    {
      title: "Conversion",
      content: "Drive inquiries for training programs and potash sales through all social media platforms.",
      icon: <FaShoppingCart />,
      imgSrc: "/20241112_163334.jpg", // Replace with your image URL
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

  const imageStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    margin: "0 auto 1rem",
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
            <img src={item.imgSrc} alt={item.title} style={imageStyle} />
            <h2 style={cardTitleStyle}>{item.title}</h2>
            <p style={cardContentStyle}>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mission;
