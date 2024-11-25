const Projects = () => {
    return (
      <div
        style={{
          padding: '24px',
          backgroundColor: '#f7fafc',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontSize: '2rem', 
            fontWeight: 'bold',
            color: '#2d3748', 
            marginBottom: '16px',
            lineHeight: '1.5',
          }}
        >
          Our Projects
        </h2>
        <p
          style={{
            fontSize: '1.25rem',
            color: '#4a5568',
            marginBottom: '24px',
            lineHeight: '1.6',
          }}
        >
          Explore our latest agricultural projects...
        </p>
      </div>
    );
  };
  
  export default Projects;