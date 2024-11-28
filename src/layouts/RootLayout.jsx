import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RootLayout = () => {
  return (
    <div
      style={{
        top: 0,
        margin: 0,
        padding: 0,
        width: '100vw', // Full viewport width
        height: '100vh', // Full viewport height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between', // Space out Navbar, content, and Footer
        overflowX: 'hidden', // Prevent horizontal scrolling
      }}
    >
      {/* Navbar */}
      <div
        style={{
          position: 'sticky', // Sticks to the top when scrolling
          top: 0,
          zIndex: 50, // Ensures Navbar is above other elements
          width: '100%',
          backgroundColor: 'white', // Navbar background color
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', // Optional shadow for better visibility
        }}
      >
        <Navbar />
      </div>

      {/* Main content area filling remaining space */}
      <main
        style={{
          flex: 1, // Fills the remaining vertical space
          margin: 0,
          padding: 0,
          width: '100vw', // Full viewport width
        }}
      >
        <Outlet /> {/* Child routes will render here */}
      </main>

      {/* Contact and Footer */}
      <div style={{ width: '100%', margin: 0, padding: 0 }}>
        
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
