const Footer = () => {
    const footerStyle = {
      backgroundColor: '#38a169', // Tailwind's bg-green-500
      color: 'white',
      padding: '1rem',
      marginTop: '2rem',
    };
  
    const containerStyle = {
      maxWidth: '1200px', // Tailwind's container class
      margin: '0 auto',
      textAlign: 'center',
      width: '100%',
    };
  
    const pStyle = {
      margin: '0',
      fontSize: '1rem', // Tailwind's text-base
    };
  
    const mediaQueryStyle = `
      @media (max-width: 768px) {
        .footer-container {
          padding: 1rem;
        }
        .footer-text {
          font-size: 0.875rem; // Tailwind's text-sm for smaller screens
        }
      }
    `;
  
    return (
      <>
        <style>{mediaQueryStyle}</style>
        <footer style={footerStyle}>
          <div style={containerStyle} className="footer-container">
            <p style={pStyle} className="footer-text">
              &copy; 2024 Nashma Agrobusiness Ltd. All Rights Reserved.
            </p>
          </div>
        </footer>
      </>
    );
  };
  
  export default Footer;