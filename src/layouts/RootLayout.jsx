import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RootLayout = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', // Full viewport height
        width: '100vw', // Full viewport width
        overflowX: 'hidden', // Prevent horizontal scrolling
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      }}
    >
      {/* Navbar */}
      <header
        style={{
          zIndex: 10,
          width: '100%', // Full width
          flexShrink: 0, // Prevent shrinking
        }}
      >
        <Navbar />
      </header>

      {/* Main Content Area */}
      <main
        style={{
          flex: 1, // Fill remaining space between header and footer
          display: 'flex',
          flexDirection: 'column',
          width: '100%', // Match viewport width
          overflowX: 'hidden', // Prevent horizontal scrolling
        }}
      >
        <Outlet /> {/* Renders child routes */}
      </main>

      {/* Footer */}
      <footer
        style={{
          width: '100%', // Full width
          flexShrink: 0, // Prevent shrinking
          marginTop: 'auto', // Pushes footer to the bottom
        }}
      >
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayout;
