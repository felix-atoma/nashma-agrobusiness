import React, { useState } from "react";

const FAQPage = () => {
  const faqs = [
    {
      question: "What is Nashma Agribusiness?",
      answer:
        "Nashma Agribusiness is a platform dedicated to empowering young people and women in agriculture through skills training, direct market access, and sustainable practices.",
    },
    {
      question: "What services does Nashma Agribusiness provide?",
      answer:
        "We offer training programs in sustainable agriculture, facilitate market access for farmers, and promote the use of eco-friendly agricultural practices.",
    },
    {
      question: "Who can participate in Nashma's programs?",
      answer:
        "Our programs are open to young people and women interested in agriculture and looking to enhance their skills and market opportunities.",
    },
    {
      question: "How can I sign up for training programs?",
      answer:
        "You can sign up by visiting our website, navigating to the 'Training Programs' section, and completing the registration form.",
    },
    {
      question: "Does Nashma Agribusiness sell agricultural products?",
      answer:
        "Yes, we facilitate the sale of potash and other agricultural products through our platform, connecting producers with buyers.",
    },
    {
      question: "How can I contact Nashma Agribusiness for more information?",
      answer:
        "You can contact us through the 'Contact Us' section on our website or reach out to us on our social media platforms."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={{ backgroundColor: "#f7fafc", padding: "2rem" }}>
      <h1 style={{ textAlign: "center", fontSize: "2.5rem", color: "#38a169", marginBottom: "2rem" }}>
        Frequently Asked Questions
      </h1>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#ffffff",
              marginBottom: "1rem",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div
              onClick={() => toggleFAQ(index)}
              style={{
                padding: "1rem",
                cursor: "pointer",
                fontWeight: "bold",
                color: "#2f855a",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {faq.question}
              <span>{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && (
              <div style={{ padding: "1rem", color: "#4a5568" }}>{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
