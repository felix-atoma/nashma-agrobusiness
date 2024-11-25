import ContactForm from "../components/ContactForm";

const Contact = () => {
  const containerStyle = {
    padding: '1.5rem',
  };

  const headingStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  };

  const mediaQueryStyle = `
    @media (max-width: 768px) {
      .contact-container {
        padding: 1rem;
      }
      .heading {
        font-size: 1.5rem;
      }
    }
  `;

  return (
    <>
      <style>{mediaQueryStyle}</style>
      <div style={containerStyle} className="contact-container">
        <h2 style={headingStyle} className="heading">
          Contact Us
        </h2>
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;