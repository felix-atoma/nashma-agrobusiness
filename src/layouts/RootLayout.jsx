import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RootLayout = () => {
  return (
    <div
      style={{
        position: 'sticky',
          top: 0,
          left: 0,
          zIndex: 50,
          width: '100vw', // Ensure full width
          backgroundColor: 'white', // Change as needed
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Navbar */}
      <header
        style={{
          zIndex: 10,
          width: '100%', // Full width
          
        }}
      >
        <Navbar />
      </header>

      {/* Main Content */}
      <main
        style={{
          flex: 1,
          margin: 0,
          padding: 0,
          width: '100vw', 
        }}
      >
        { <Outlet /> }
      </main>

      {/* Footer */}
      <footer
        style={{
          width: '100%', margin: 0, padding: 0 

        }}
      >
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayout;
