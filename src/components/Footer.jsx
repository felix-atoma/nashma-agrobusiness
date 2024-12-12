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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const logoStyle = {
    marginBottom: '1rem',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#38a169',
  };

  const quickLinksStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '1rem',
    gap: '0.5rem',
  };

  const linkStyle = {
    color: '#38a169',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'color 0.3s ease',
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
        {/* Logo */}
        <div style={logoStyle}>Nashma Agribusiness Ltd.</div>

        {/* Quick Links */}
        <div style={quickLinksStyle}>
          <a href="/about" style={linkStyle} onMouseOver={(e) => (e.target.style.color = socialMediaHoverStyle.color)} onMouseOut={(e) => (e.target.style.color = linkStyle.color)}>
            About Us
          </a>
          <a href="/services" style={linkStyle} onMouseOver={(e) => (e.target.style.color = socialMediaHoverStyle.color)} onMouseOut={(e) => (e.target.style.color = linkStyle.color)}>
            Services
          </a>
          <a href="/contact" style={linkStyle} onMouseOver={(e) => (e.target.style.color = socialMediaHoverStyle.color)} onMouseOut={(e) => (e.target.style.color = linkStyle.color)}>
            Contact
          </a>
          <a href="/faq" style={linkStyle} onMouseOver={(e) => (e.target.style.color = socialMediaHoverStyle.color)} onMouseOut={(e) => (e.target.style.color = linkStyle.color)}>
            FAQ
          </a>
        </div>

        {/* Social Media Links */}
        <div style={socialLinksStyle}>
          <a href="https://facebook.com/NashmaAgribusiness" target="_blank" rel="noopener noreferrer">
            <FaFacebook style={iconStyle} onMouseOver={(e) => (e.target.style.color = socialMediaHoverStyle.color)} onMouseOut={(e) => (e.target.style.color = iconStyle.color)} />
          </a>
          <a href="https://instagram.com/nashma_agribusiness" target="_blank" rel="noopener noreferrer">
            <FaInstagram style={iconStyle} onMouseOver={(e) => (e.target.style.color = socialMediaHoverStyle.color)} onMouseOut={(e) => (e.target.style.color = iconStyle.color)} />
          </a>
          <a href="https://tiktok.com/@nashma_agribusines_ltd" target="_blank" rel="noopener noreferrer">
            <FaInstagram style={iconStyle} onMouseOver={(e) => (e.target.style.color = socialMediaHoverStyle.color)} onMouseOut={(e) => (e.target.style.color = iconStyle.color)} />
          </a>
          <a href="https://linkedin.com/in/nashma-agribusiness" target="_blank" rel="noopener noreferrer">
            <FaLinkedin style={iconStyle} onMouseOver={(e) => (e.target.style.color = socialMediaHoverStyle.color)} onMouseOut={(e) => (e.target.style.color = iconStyle.color)} />
          </a>
        </div>

        {/* Copyright */}
        <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>&copy; 2024 Nashma Agribusiness Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
