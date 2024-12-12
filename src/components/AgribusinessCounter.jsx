import React, { useEffect, useState, useRef } from "react";

const AgribusinessCounter = () => {
  const stats = [
    { number: 500, text: "Women Empowered" },
    { number: 300, text: "Youth Trained" },
    { number: 150, text: "Disabilities Supported" },
    { number: 1000, text: "Tons of Cocoa Waste Recycled" },
  ];

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Key Stats</h2>
      <div style={contentStyle}>
        {stats.map((stat, index) => (
          <div key={index} style={itemStyle}>
            <Counter target={stat.number} />
            <p style={textStyle}>{stat.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          startCounting();
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the counter is visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [hasAnimated]);

  const startCounting = () => {
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
  };

  return (
    <h2 ref={counterRef} style={counterStyle}>
      {count}+
    </h2>
  );
};

// Styles
const containerStyle = {
  textAlign: "center",
  padding: "2rem",
  backgroundColor: "#FFFFFF",
};

const titleStyle = {
  fontSize: "2rem",
  color: "#333",
  marginBottom: "1.5rem",
  fontWeight: "bold",
};

const contentStyle = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "2rem",
};

const itemStyle = {
  textAlign: "center",
  flex: "1 1 200px",
};

const counterStyle = {
  fontSize: "2.5rem",
  color: "#008000",
  fontWeight: "bold",
  margin: "0",
};

const textStyle = {
  fontSize: "1rem",
  color: "#333",
  marginTop: "0.5rem",
};

export default AgribusinessCounter;
