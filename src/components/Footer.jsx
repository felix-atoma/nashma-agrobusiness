import React from "react";
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si'; // TikTok icon

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#e6f7e6', // Light green background
    color: '#38a169', // Green text
    padding: '2rem 0',
    textAlign: 'center',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'column', // Default to column layout
    alignItems: 'center',
    gap: '1.5rem',
  };

  const logoStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#38a169',
  };

  const quickLinksStyle = {
    display: 'flex',
    flexDirection: 'column', // Default to column layout
    alignItems: 'center',
    gap: '0.5rem',
  };

  const linkStyle = {
    color: '#38a169',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'color 0.3s ease',
  };

  const socialLinksStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
  };

  const iconStyle = {
    fontSize: '1.5rem',
    color: '#38a169',
    transition: 'color 0.3s ease',
  };

  const socialMediaHoverStyle = {
    ...iconStyle,
    color: '#2f855a',
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        {/* Logo */}
        <div style={logoStyle}>Nashma Agribusiness Ltd.</div>

        {/* Quick Links */}
        <div style={quickLinksStyle}>
          {['About Us', 'Services', 'Contact', 'FAQ'].map((link, idx) => (
            <a
              key={idx}
              href={`/${link.toLowerCase().replace(/\s+/g, '')}`}
              style={linkStyle}
              onMouseOver={(e) => (e.target.style.color = socialMediaHoverStyle.color)}
              onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Social Media Links */}
        <div style={socialLinksStyle}>
          {[
            { href: 'https://web.facebook.com/profile.php?id=61569281702237', icon: <FaFacebook /> },
            { href: 'https://www.tiktok.com/@nasma_agribusines_ltd?_t=8s5LHKwrZ5B&_r=1', icon: <SiTiktok /> },
            { href: 'https://www.instagram.com/nashma_agribusiness/profilecard/?igsh=MWxna2NsYzhocHJqdQ==', icon: <FaInstagram /> },
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              style={iconStyle}
              onMouseOver={(e) => (e.target.style.color = socialMediaHoverStyle.color)}
              onMouseOut={(e) => (e.target.style.color = iconStyle.color)}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
          &copy; 2024 Nashma Agribusiness Ltd. All Rights Reserved.
        </p>
      </div>

      {/* Responsive Styles */}
      <style>
        {`
          @media (min-width: 768px) {
            div[style] {
              flex-direction: row; /* Switch to row layout for larger screens */
              justify-content: space-between;
              align-items: flex-start;
            }

            div[style]:nth-child(2) { /* Quick links */
              flex-direction: column; /* Stays vertical */
              align-items: flex-start;
            }

            div[style]:nth-child(3) { /* Social media links */
              justify-content: flex-end;
            }
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
