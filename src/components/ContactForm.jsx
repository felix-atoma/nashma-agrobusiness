import { useState } from "react";
import { FaHome, FaPhone, FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    message: "",
    name: "",
    email: "",
    subject: "",
    phone: "",
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
        "YOUR_SERVICE_ID", 
        "YOUR_TEMPLATE_ID", 
        formData,
        "YOUR_PUBLIC_KEY"
      );
      setSuccess(true);
      alert("Your message has been sent!");
      setFormData({ message: "", name: "", email: "", subject: "", phone: "" });
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
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <div style={{ position: "relative" }}>
        <img
          src="/20241112_164309.jpg"
          alt="Contact"
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "50vh",
            objectFit: "cover",
          }}
        />
      </div>
      <h2
        style={{
          fontSize: "1.8rem",
          marginBottom: "1.5rem",
          color: "#333",
          textAlign: "center",
        }}
      >
        Get in Touch
      </h2>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "flex-start",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            flex: "2",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
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
              borderRadius: "5px",
            }}
            rows="6"
            required
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              width: "100%",
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              style={{
                padding: "1rem",
                border: "1px solid #38A169",
                fontSize: "1rem",
                borderRadius: "5px",
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
                padding: "1rem",
                border: "1px solid #38A169",
                fontSize: "1rem",
                borderRadius: "5px",
              }}
              required
            />
          </div>
          <input
            type="text"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            style={{
              padding: "1rem",
              border: "1px solid #38A169",
              fontSize: "1rem",
              borderRadius: "5px",
            }}
            required
          />
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
              borderRadius: "5px",
            }}
            required
          />
          <button
            type="submit"
            style={{
              padding: "1rem",
              border: "none",
              backgroundColor: "#38A169",
              color: "white",
              cursor: isSending ? "not-allowed" : "pointer",
              fontWeight: "bold",
              fontSize: "1rem",
              borderRadius: "5px",
            }}
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send"}
          </button>
        </form>
        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <FaHome size={24} color="#38A169" />
            <div>
              <p style={{ fontWeight: "bold", margin: "0" }}>Kumasi, Ghana</p>
              <p style={{ margin: "0" }}>Apemso-KNUST, Kumasi</p>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <FaPhone size={24} color="#38A169" />
            <div>
              <p style={{ margin: "0" }}>(+233) 0545086577 / 0243241649</p>
              <p style={{ margin: "0" }}>Mon to Fri 9am to 6pm</p>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <FaEnvelope size={24} color="#38A169" />
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
