import React, { useState, useEffect } from "react";
import ExperienceSection from "../components/ExperienceSection";
import ServicesSection from "../components/servicesSection";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/path-to-image1.jpg",
      title: "Empowering Farmers",
      description: "Connecting farmers to customers for better opportunities.",
    },
    {
      image: "/path-to-image2.jpg",
      title: "Sustainable Agriculture",
      description: "Promoting eco-friendly and sustainable farming practices.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div>
      {/* Carousel */}
      <div
        style={{
          position: "relative",
          height: "100vh", // Full viewport height
          width: "100%",
          overflow: "hidden",
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              top: 0,
              left: index === currentSlide ? "0" : "100%",
              width: "100%",
              height: "100%",
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transition: "left 0.8s ease-in-out",
              zIndex: index === currentSlide ? 1 : 0,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                color: "#fff",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
                padding: "20px",
              }}
            >
              <h1
                style={{
                  fontSize: "3rem",
                  fontWeight: "bold",
                  marginBottom: "16px",
                }}
              >
                {slide.title}
              </h1>
              <p style={{ fontSize: "1.5rem", lineHeight: "1.6" }}>
                {slide.description}
              </p>
            </div>
          </div>
        ))}
        {/* Carousel Dots */}
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "10px",
          }}
        >
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                border: "none",
                backgroundColor:
                  index === currentSlide ? "#fff" : "rgba(255, 255, 255, 0.5)",
                cursor: "pointer",
              }}
            ></button>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div
        style={{
          padding: "40px 20px",
          backgroundColor: "#f7fafc",
          textAlign: "center",
        }}
      >
        <ExperienceSection />
        <ServicesSection/>
      </div>
    </div>
  );
};

export default Home;
