import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  const navStyle = {
    backgroundColor: "white",
    color: "#38a169", // Tailwind's green-500
    padding: "1rem",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    width: "100%",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  };

  const ulStyle = {
    display: "flex",
    listStyleType: "none",
    padding: "0",
    margin: "0",
    gap: "2.5rem", // Increased spacing between links
    alignItems: "center",
  };

  const linkStyle = {
    color: "#38a169",
    textDecoration: "none",
    fontWeight: "bold",
    position: "relative",
    padding: "0.5rem 0", // Adds space around the link
  };

  const linkHoverBarStyle = {
    position: "absolute",
    bottom: "-5px",
    right: "0",
    height: "3px",
    backgroundColor: "#38a169",
    width: "0%",
    transition: "width 0.3s ease-in-out",
  };

  const phoneContainerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    backgroundColor: "#38a169",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    color: "white",
  };

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <h1 style={{ fontWeight: "bold", fontSize: "1.5rem", color: "#38a169" }}>
          Nashma Agrobusiness
        </h1>
        <ul style={ulStyle}>
          {["Home", "About", "Services", "Blog", "Contact"].map((text, index) => (
            <li key={index} style={{ position: "relative" }}>
              <Link
                to={`/${text.toLowerCase()}`}
                style={linkStyle}
                onMouseEnter={(e) =>
                  (e.target.querySelector(".hover-bar").style.width = "100%")
                }
                onMouseLeave={(e) =>
                  (e.target.querySelector(".hover-bar").style.width = "0%")
                }
              >
                {text}
                <span
                  className="hover-bar"
                  style={linkHoverBarStyle}
                ></span>
              </Link>
            </li>
          ))}
        </ul>
        <div style={phoneContainerStyle}>
          <FaPhoneAlt />
          <span>+233 123 456 789</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
