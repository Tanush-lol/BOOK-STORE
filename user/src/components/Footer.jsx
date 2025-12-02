// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer style={{ marginTop: "2rem", padding: "1rem 2rem", background: "#111827", color: "#9ca3af", textAlign: "center" }}>
      <p style={{ margin: 0 }}>© {new Date().getFullYear()} BookStore. Built with MERN.</p>
    </footer>
  );
};

export default Footer;
