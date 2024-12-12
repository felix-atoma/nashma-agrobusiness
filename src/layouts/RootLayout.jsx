import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RootLayout = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', // Ensures footer stays at the bottom for short pages
        overflowX: 'hidden', // Prevent horizontal scrolling
      }}
    >
      {/* Navbar */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          zIndex: 50,
          width: '100%', // Full width
          backgroundColor: 'white', // Change as needed
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Navbar />
      </header>

      {/* Main Content */}
      <main
        style={{
          flex: 1,
          width: '100%', // Full width
          overflowX: 'hidden', // Prevent horizontal scrolling for content
        }}
      >
        <Outlet />
      </main>

      {/* Footer */}
      <footer
        style={{
          width: '100%', // Full width
          backgroundColor: 'white', // Change as needed
        }}
      >
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayout;
