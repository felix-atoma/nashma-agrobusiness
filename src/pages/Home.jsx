import React, { useState, useEffect } from "react";
import ExperienceSection from "../components/ExperienceSection";
import ServicesSection from "../components/servicesSection"
import AgribusinessCounter from "../components/AgribusinessCounter";
import WhyChooseUs from "../components/WhyChooseUs";
import ContactPage from "../components/ContactPage";
import { FaArrowUp } from "react-icons/fa"; // Import arrow icon

// Import images directly or use public folder correctly
const slides = [
  {
    image: "/h1_hero.png", // Correct public folder usage
    title: "Nasma Agribusiness",
    description: "Empowering Sustainable Growth in Rural Cocoa Communities.",
  },
  {
    image: "/20241112_164309.jpg", // Correct public folder usage
    title: "Enabling Young People and Women to Thrive",
    description: "Promoting eco-friendly and sustainable farming practices.",
  },
];


const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clean up interval
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      style={{
        width: "100vw", // Full viewport width
        overflowX: "hidden", // Prevent horizontal scrolling
        position: "relative",
      }}
    >
      {/* Hero Carousel */}
      <div
        style={{
          position: "relative",
          height: "100vh", // Full viewport height
          width: "100vw", // Full viewport width
          overflow: "hidden",
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              top: 0,
              left: index === currentSlide ? "0" : "100vw",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transition: "left 0.8s ease-in-out",
              zIndex: index === currentSlide ? 1 : 0,
            }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
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

      {/* Main Content */}
      <div
        style={{
          padding: "40px 20px",
          backgroundColor: "#f7fafc",
          textAlign: "center",
        }}
      >
        <ExperienceSection />
        <ServicesSection />
        <AgribusinessCounter />
        <WhyChooseUs />
        <ContactPage />
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#71B34A", // Green background
          color: "#fff", // White color for the arrow
          border: "none",
          borderRadius: "50%",
          padding: "15px",
          cursor: "pointer",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
          fontSize: "24px",
          zIndex: 9999,
          transition: "background-color 0.3s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#4A8A34")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#71B34A")}
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default Home;
