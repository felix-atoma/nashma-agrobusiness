import React from 'react';

const ContactPage = () => {
  const containerStyle = {
    backgroundColor: 'white',
    padding: '2rem',
  };

  const sectionStyle = {
    display: 'flex',
    flexDirection: 'row', // Align the sections horizontally
    justifyContent: 'space-between',
    alignItems: 'center', // Ensure vertical alignment of text and image
    maxWidth: '1200px',
    margin: '0 auto',
    flexWrap: 'wrap', // Ensure the layout is responsive
  };

  const leftSectionStyle = {
    color: '#333',
    textAlign: 'left',
    marginBottom: '2rem',
    width: '100%',
    maxWidth: '500px',
  };

  const rightSectionStyle = {
    width: '100%',
    maxWidth: '500px',
  };

  const buttonStyle = {
    backgroundColor: '#4CAF50', // Green color
    color: 'white',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#45a049',
  };

  const imgStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div style={containerStyle}>
      <div style={sectionStyle}>
        
        {/* Left Section - Image */}
        <div style={rightSectionStyle}>
          <img
            src="src/assets/about3.png" // Replace with your actual image path
            alt="Agriculture"
            style={imgStyle}
          />
        </div>

        {/* Right Section - Contact Information */}
        <div style={leftSectionStyle}>
          <h2 style={{ fontSize: '24px', fontWeight: '600' }}>Contact Us</h2>
          <p style={{ fontSize: '16px', fontWeight: '500' }}>Get in touch with us for any inquiries or assistance.</p>
          <div style={{ marginTop: '16px' }}>
            <p><span style={{ fontWeight: '600' }}>Phone:</span> (10) 892-293 2678</p>
            <p><span style={{ fontWeight: '600' }}>Email:</span> <a href="mailto:contact@agrica.com" style={{ color: '#1E40AF', textDecoration: 'underline' }}>contact@agrica.com</a></p>
            <p><span style={{ fontWeight: '600' }}>Address:</span> 768/A, Green Lane 790, Max Town, New York</p>
          </div>
          <div style={{ marginTop: '24px' }}>
            <button
              onClick={() => window.location.href = '/contact'}
              style={buttonStyle}
              onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
              onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
            >
              Drop Your Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
