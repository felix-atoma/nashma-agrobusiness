import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RootLayout = () => {
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', // Ensures full viewport height coverage
        width: '100vw', // Ensures full viewport width
        overflowX: 'hidden', // Prevents horizontal scrolling
        boxSizing: 'border-box', // Includes padding and border in dimensions
      }}
    >
      {/* Navbar */}
      <div
        style={{
          zIndex: 10,
          width: '100%', // Full horizontal coverage
          flexShrink: 0, // Prevents shrinking
        }}
      >
        <Navbar />
      </div>

      {/* Main content area */}
      <main
        style={{
          flex: 1, // Fills remaining vertical space
          display: 'flex',
          flexDirection: 'column',
          width: '100%', // Matches full width of the viewport
          maxWidth: '100vw', // Prevents overflow
          overflowX: 'hidden', // Avoid horizontal scrolling
          padding: 0, // Ensure no extra spacing
          margin: 0, // Ensure alignment with the Navbar
        }}
      >
        <Outlet /> {/* Renders child routes */}
      </main>

      {/* Footer */}
      <footer
        style={{
          width: '100%', // Full horizontal coverage
          flexShrink: 0, // Prevents shrinking
          padding: 0, // Aligns with the layout
          margin: 0, // Matches Navbar's alignment
        }}
      >
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayout;
