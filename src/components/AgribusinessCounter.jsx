import React, { useEffect, useState } from "react";

const AgribusinessCounter = () => {
  const stats = [
    { number: 20, text: "List of any and all companies related to agribusiness." },
    { number: 10000, text: "List of any and all companies related to agribusiness." },
    { number: 12, text: "List of any and all companies related to agribusiness." },
    { number: 280, text: "List of any and all companies related to agribusiness." },
  ];

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        {stats.map((stat, index) => (
          <div key={index} style={itemStyle}>
            <Counter target={stat.number} />
            <p style={textStyle}>{stat.text}</p>
          </div>
        ))}
      </div>
      <div style={lineStyle}></div>
    </div>
  );
};

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // Animation duration in ms
    const increment = target / (duration / 16); // Assuming 60fps

    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(interval);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(interval);
  }, [target]);

  return <h2 style={counterStyle}>{count}+</h2>;
};

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "25vh", // Quarter-page height
  width: "100%",
  backgroundColor: "#FFFFFF",
  position: "relative",
};

const contentStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "2rem",
  flexWrap: "wrap",
};

const itemStyle = {
  textAlign: "center",
};

const counterStyle = {
  fontSize: "2.5rem",
  color: "#008000", // Green for the numbers
  fontWeight: "bold",
  margin: "0",
};

const textStyle = {
  fontSize: "1rem",
  color: "#333333",
  marginTop: "0.5rem",
  maxWidth: "200px",
};

const lineStyle = {
  width: "100%",
  height: "2px",
  backgroundColor: "#CCCCCC", // Light grey for the line
  position: "absolute",
  bottom: 0,
};

export default AgribusinessCounter;
