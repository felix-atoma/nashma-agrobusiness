import { useState } from "react";
import { FaHome, FaPhone, FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    message: "",
    name: "",
    email: "",
    phone: "", // Added phone field
    subject: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    try {
      await emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS Template ID
        formData,
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS Public Key
      );
      setSuccess(true);
      alert("Your message has been sent!");
      setFormData({ message: "", name: "", email: "", phone: "", subject: "" }); // Reset form
    } catch (error) {
      alert("An error occurred. Please try again later.");
      console.error("EmailJS error:", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem" }}>
      <div style={{ position: "relative", marginTop: "0" }}>
        <img
          src="/20241112_164309.jpg"
          alt="Contact"
          style={{
            width: "100vw", // Full viewport width
            height: "100vh", // 50% of the viewport height
            objectFit: "cover",
          }}
        />
      </div>
      <h2
        style={{
          fontSize: "2rem",
          marginBottom: "2rem",
          color: "#333",
          textAlign: "left",
        }}
      >
        Get in Touch
      </h2>
      <div
        style={{
          display: "flex",
          gap: "4rem",
          alignItems: "flex-start",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            flex: "2",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            width: "100%",
          }}
        >
          <textarea
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            style={{
              padding: "1rem",
              border: "1px solid #38A169",
              resize: "none",
              fontSize: "1rem",
            }}
            rows="6"
            required
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
              width: "100%",
              flexWrap: "wrap",
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              style={{
                flex: "1",
                padding: "1rem",
                border: "1px solid #38A169",
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
                flex: "1",
                padding: "1rem",
                border: "1px solid #38A169",
                fontSize: "1rem",
              }}
              required
            />
            <input
              type="tel" // Changed to tel for phone number
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              style={{
                flex: "1",
                padding: "1rem",
                border: "1px solid #38A169",
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
              border: "1px solid #38A169",
              fontSize: "1rem",
            }}
            required
          />
          <button
            type="submit"
            style={{
              padding: "1rem",
              border: "2px solid #38A169",
              backgroundColor: "white",
              color: "#38A169",
              cursor: isSending ? "not-allowed" : "pointer",
              fontWeight: "bold",
              fontSize: "1.2rem",
              width: "150px",
              transition: "all 0.3s ease",
              marginTop: "1rem",
              alignSelf: "flex-start",
            }}
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send"}
          </button>
        </form>

        <div
          style={{
            marginTop: "0",
            flex: "1",
            padding: "",
            display: "flex",
            flexDirection: "column",
            gap: "3rem",
            marginLeft: "5rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <FaHome size={28} color="#38A169" />
            <div>
              <p style={{ fontWeight: "bold", margin: "0" }}>Kumasi, Ghana</p>
              <p style={{ margin: "0" }}>Apemso-KNUST, Kumasi</p>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <FaPhone size={28} color="#38A169" />
            <div>
              <p style={{ margin: "0" }}>0545086577</p>
              <p style={{ margin: "0" }}>Mon to Fri 9am to 6pm</p>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <FaEnvelope size={28} color="#38A169" />
            <div>
              <p style={{ margin: "0" }}>nashmafarms@gmail.com</p>
              <p style={{ margin: "0" }}>Reach out anytime!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
