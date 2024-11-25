import { Link } from 'react-router-dom';

const Navbar = () => {
  const navStyle = {
    backgroundColor: '#38a169', // Tailwind's bg-green-500
    color: 'white',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  };

  const containerStyle = {
    maxWidth: '1200px', // Tailwind's container class
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    flexWrap: 'wrap', // To make it responsive and wrap items
  };

  const h1Style = {
    fontWeight: 'bold',
    fontSize: '1.25rem', // Tailwind's text-xl
    margin: '0',
  };

  const ulStyle = {
    display: 'flex',
    listStyleType: 'none',
    padding: '0',
    margin: '0',
    flexWrap: 'wrap', // Wrap links in smaller screens
    justifyContent: 'space-between',
    gap: '1rem',
  };

  const liStyle = {
    marginRight: '1rem', // Tailwind's space-x-4
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    transition: 'color 0.3s',
  };

  const hoverStyle = {
    color: '#fbbf24', // Tailwind's hover:text-yellow-300
  };

  const mediaQueryStyle = `
    @media (max-width: 768px) {
      .navbar-container {
        flex-direction: column;
        align-items: center;
      }
      .navbar-list {
        flex-direction: column;
        align-items: center;
      }
      .navbar-item {
        margin-bottom: 1rem;
      }
    }
  `;

  return (
    <>
      <style>{mediaQueryStyle}</style>
      <nav style={navStyle}>
        <div style={containerStyle} className="navbar-container">
          <h1 style={h1Style}>Nashma Agrobusiness</h1>
          <ul style={ulStyle} className="navbar-list">
            <li style={liStyle} className="navbar-item">
              <Link to="/" style={linkStyle} onMouseOver={(e) => e.target.style.color = hoverStyle.color} onMouseOut={(e) => e.target.style.color = linkStyle.color}>Home</Link>
            </li>
            <li style={liStyle} className="navbar-item">
              <Link to="/about" style={linkStyle} onMouseOver={(e) => e.target.style.color = hoverStyle.color} onMouseOut={(e) => e.target.style.color = linkStyle.color}>About</Link>
            </li>
            <li style={liStyle} className="navbar-item">
              <Link to="/projects" style={linkStyle} onMouseOver={(e) => e.target.style.color = hoverStyle.color} onMouseOut={(e) => e.target.style.color = linkStyle.color}>Projects</Link>
            </li>
            <li style={liStyle} className="navbar-item">
              <Link to="/contact" style={linkStyle} onMouseOver={(e) => e.target.style.color = hoverStyle.color} onMouseOut={(e) => e.target.style.color = linkStyle.color}>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;