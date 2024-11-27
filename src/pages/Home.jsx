import React, { useEffect, useState } from 'react';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call or delay
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after 2 seconds
    }, 2000);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    // Display loading spinner while isLoading is true
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: '#f7fafc',
        }}
      >
        <div
          style={{
            border: '4px solid #e2e8f0', // Light gray border
            borderTop: '4px solid #2d3748', // Dark gray border
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            animation: 'spin 1s linear infinite',
          }}
        ></div>
        {/* Add spinner animation */}
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  // Main content of the Home page
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
        Welcome to Nashma Agricbusiness Ltd
      </h2>
      <p
        style={{
          fontSize: '1.25rem',
          color: '#4a5568',
          marginBottom: '24px',
          lineHeight: '1.6',
        }}
      >
        We are committed to providing top-quality agricultural products.
      </p>
    </div>
  );
};

export default Home;
