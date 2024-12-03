const About = () => {
    const containerStyle = {
      padding: '1.5rem',
    };
  
    const headingStyle = {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
    };
  
    const paragraphStyle = {
      fontSize: '1rem',
      lineHeight: '1.6',
      color: '#4A4A4A', // Tailwind's text-gray-700
    };
  
    const mediaQueryStyle = `
      @media (max-width: 768px) {
        .about-container {
          padding: 1rem;
        }
        .heading {
          font-size: 1.5rem;
        }
        .paragraph {
          font-size: 0.875rem;
        }
      }
    `;
  
    return (
      <>
        <style>{mediaQueryStyle}</style>
        <div style={containerStyle} className="about-container">
          <h2 style={headingStyle} className="heading">
            
          </h2>
          <p style={paragraphStyle} className="paragraph">
            We are a leading agricbusiness focused on sustainable farming practices and providing high-quality, locally sourced produce to our customers.
          </p>
        </div>
      </>
    );
  };
  
  export default About;