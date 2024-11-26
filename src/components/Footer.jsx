import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Importing some example icons

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#e6f7e6', // Light green background
    color: '#38a169', // Green text
    padding: '2rem 0', // Increased padding for a spacious footer
    textAlign: 'center',
  };

  const containerStyle = {
    maxWidth: '1200px', // Ensure content is centered
    margin: '0 auto',
    width: '100%',
  };

  const pStyle = {
    margin: '0',
    fontSize: '1rem', // Default text size
  };

  const socialLinksStyle = {
    marginTop: '1rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem', // Spacing between social media icons
  };

  const iconStyle = {
    fontSize: '1.5rem', // Icon size
    color: '#38a169', // Green color for the icons
    transition: 'color 0.3s ease',
  };

  // Social media icons hover effect
  const socialMediaHoverStyle = {
    ...iconStyle,
    color: '#2f855a', // Darker green when hovered
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <p style={pStyle}>&copy; 2024 Nashma Agrobusiness Ltd. All Rights Reserved.</p>

        {/* Social Media Links */}
        <div style={socialLinksStyle}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook style={iconStyle} onMouseOver={(e) => (e.target.style.color = socialMediaHoverStyle.color)} onMouseOut={(e) => (e.target.style.color = iconStyle.color)} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter style={iconStyle} onMouseOver={(e) => (e.target.style.color = socialMediaHoverStyle.color)} onMouseOut={(e) => (e.target.style.color = iconStyle.color)} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin style={iconStyle} onMouseOver={(e) => (e.target.style.color = socialMediaHoverStyle.color)} onMouseOut={(e) => (e.target.style.color = iconStyle.color)} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram style={iconStyle} onMouseOver={(e) => (e.target.style.color = socialMediaHoverStyle.color)} onMouseOut={(e) => (e.target.style.color = iconStyle.color)} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
