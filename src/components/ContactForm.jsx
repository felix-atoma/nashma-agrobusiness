import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your message has been sent!');
    // You can add logic to handle form submission (e.g., API call)
  };

  const formStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '1rem',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
    color: '#4A4A4A', // Tailwind's text-gray-700
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    marginBottom: '1rem',
  };

  const buttonStyle = {
    width: '100%',
    backgroundColor: '#38A169', // Tailwind's bg-green-500
    color: 'white',
    padding: '0.75rem',
    borderRadius: '8px',
    cursor: 'pointer',
  };

  const mediaQueryStyle = `
    @media (max-width: 768px) {
      .form-container {
        padding: 1rem;
      }
      .input-field {
        padding: 0.5rem;
      }
      .button {
        padding: 0.75rem;
      }
    }
  `;

  return (
    <>
      <style>{mediaQueryStyle}</style>
      <form onSubmit={handleSubmit} style={formStyle} className="form-container">
        <div className="mb-4">
          <label style={labelStyle}>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
            className="input-field"
          />
        </div>
        <div className="mb-4">
          <label style={labelStyle}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
            className="input-field"
          />
        </div>
        <div className="mb-4">
          <label style={labelStyle}>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={inputStyle}
            className="input-field"
          />
        </div>
        <button type="submit" style={buttonStyle} className="button">
          Send Message
        </button>
      </form>
    </>
  );
};

export default ContactForm;