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
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1); // Clamp between 0 and 1
      const value = Math.floor(progress * target);

      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animate);
  }, [target]);

  return <h2 style={counterStyle}>{count}+</h2>;
};

// Styles (unchanged)
const containerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  padding: "2rem",
  backgroundColor: "#FFFFFF",
  position: "relative",
  boxSizing: "border-box",
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
  flex: "1 1 200px",
  margin: "1rem 0",
};

const counterStyle = {
  fontSize: "2.5rem",
  color: "#008000",
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
  backgroundColor: "#CCCCCC",
  position: "absolute",
  bottom: 0,
};

export default AgribusinessCounter;
