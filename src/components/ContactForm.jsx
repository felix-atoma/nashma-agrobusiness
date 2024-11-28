import { useState } from "react";
import { FaHome, FaPhone, FaEnvelope } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    message: "",
    name: "",
    email: "",
    subject: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
    // Add submission logic if needed
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem" }}>
      <div style={{ position: "relative" }}>
        <img
          src="https://via.placeholder.com/1200x300" // Replace with your image URL
          alt="Contact"
          style={{
            width: "100%",
            borderRadius: "8px",
            marginBottom: "2rem",
            position: "relative",
          }}
        />
        {/* "Contact" Text on the Image */}
        <h1
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "4rem",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Contact
        </h1>
      </div>

      <h2
        style={{
          fontSize: "2rem",
          marginBottom: "2rem",
          color: "#333",
          textAlign: "left", // Align to the left
        }}
      >
        Get in Touch
      </h2>

      <div
        style={{
          display: "flex",
          gap: "4rem",
          alignItems: "flex-start",
          flexDirection: "row", // Default: row for larger screens
          flexWrap: "wrap", // Allow wrapping for smaller screens
        }}
      >
        {/* Left: Contact Form */}
        <form
          onSubmit={handleSubmit}
          style={{
            flex: "2",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            width: "100%", // Full width for form
          }}
        >
          <textarea
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            style={{
              padding: "1rem",
              resize: "none",
              fontSize: "1rem",
            }}
            rows="6"
            required
          />
          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              width: "100%",
              flexWrap: "wrap", // Allow inputs to wrap on smaller screens
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              style={{
                flex: "1", // Makes each input flexible
                padding: "1rem",
                fontSize: "1rem",
              }}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              style={{
                flex: "1", // Makes each input flexible
                padding: "1rem",
                fontSize: "1rem",
              }}
              required
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Enter subject"
            value={formData.subject}
            onChange={handleChange}
            style={{
              padding: "1rem",
              fontSize: "1rem",
            }}
            required
          />
          <button
            type="submit"
            style={{
              padding: "1rem",
              border: "2px solid #38A169", // Light green border
              backgroundColor: "white",
              color: "#38A169",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "1.2rem",
              width: "150px",
              transition: "all 0.3s ease",
              marginTop: "1rem",
              alignSelf: "flex-start",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#38A169";
              e.target.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "white";
              e.target.style.color = "#38A169";
            }}
          >
            Send
          </button>
        </form>

        {/* Right: Contact Information */}
        <div
          style={{
            marginTop: "0",
            flex: "1",
            padding: "",
            display: "flex",
            flexDirection: "column",
            gap: "3rem",
            marginLeft: "5rem", // Margin for larger screens
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <FaHome size={28} color="#38A169" />
            <div>
              <p style={{ fontWeight: "bold", margin: "0" }}>
                Accra, Ghana
              </p>
              <p style={{ margin: "0" }}>123 Independence Avenue</p>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <FaPhone size={28} color="#38A169" />
            <div>
              <p style={{ margin: "0" }}>+233 30 123 4567</p>
              <p style={{ margin: "0" }}>Mon to Fri 9am to 6pm</p>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <FaEnvelope size={28} color="#38A169" />
            <div>
              <p style={{ margin: "0" }}>info@nashma.agric</p>
              <p style={{ margin: "0" }}>Reach out anytime!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
