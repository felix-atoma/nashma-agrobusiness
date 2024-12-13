import { useState } from "react";
import { FaHome, FaPhone, FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    message: "",
    name: "",
    email: "",
    phone: "",
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
        "service_qvw1nee", // Replace with your service ID
        "template_nck1umh", // Replace with your template ID
        formData,
        "QKLwxjX-pqOTBiWsv" // Replace with your public key
      );
      setSuccess(true);
      alert("Your message has been sent!");
      setFormData({ message: "", name: "", email: "", phone: "", subject: "" });
    } catch (error) {
      alert("An error occurred. Please try again later.");
      console.error("EmailJS error:", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div
      style={{
        width: "100%",
        margin: "0 auto",
        padding: "2rem",
        boxSizing: "border-box",
      }}
    >
      <div style={{ position: "relative", width: "100%", marginBottom: "2rem" }}>
        <img
          src="/20241112_164309.jpg"
          alt="Contact"
          style={{
            width: "100%",
            height: "100vh",
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
          gap: "2rem",
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            flex: "1 1 60%",
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
              width: "100%",
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
                flex: "1 1 calc(33.333% - 1rem)",
                padding: "1rem",
                border: "1px solid #38A169",
                fontSize: "1rem",
                minWidth: "200px",
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
                flex: "1 1 calc(33.333% - 1rem)",
                padding: "1rem",
                border: "1px solid #38A169",
                fontSize: "1rem",
                minWidth: "200px",
              }}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              style={{
                flex: "1 1 calc(33.333% - 1rem)",
                padding: "1rem",
                border: "1px solid #38A169",
                fontSize: "1rem",
                minWidth: "200px",
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
            flex: "1 1 30%",
            display: "flex",
            flexDirection: "column",
            gap: "3rem",
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
              <p style={{ margin: "0" }}>0244173068</p>
              <p style={{ margin: "0" }}>Mon to Fri 9am to 6pm</p>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <FaEnvelope size={28} color="#38A169" />
            <div>
              <p style={{ margin: "0" }}>felixatoma2@gmail.com</p>
              <p style={{ margin: "0" }}>Reach out anytime!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
