import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RootLayout = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        overflowX: 'hidden', // Prevent horizontal scrolling
      }}
    >
      {/* Navbar fixed to the top */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000, // Ensure Navbar is above content
        }}
      >
        <Navbar />
      </div>

      {/* Main Content */}
      <main
        style={{
          flexGrow: 1,
          marginTop: '4rem', // Account for Navbar height
          marginBottom: '4rem', // Account for Footer height
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Outlet />
      </main>

      {/* Footer fixed to the bottom */}
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1000, // Ensure Footer is above content
        }}
      >
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
