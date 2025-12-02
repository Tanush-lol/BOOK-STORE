// src/components/Navbar.jsx
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "1rem 2rem", background: "#4f46e5", color: "#fff" }}>
      <Link to="/" style={{ fontWeight: "bold", fontSize: "1.2rem", textDecoration: "none", color: "#fff" }}>
        BookStore
      </Link>
      <div style={{ display: "flex", gap: "1rem" }}>
        <NavLink to="/" style={({ isActive }) => ({ color: isActive ? "#ffe082" : "#fff", textDecoration: "none" })}>
          Home
        </NavLink>
        <NavLink to="/about" style={({ isActive }) => ({ color: isActive ? "#ffe082" : "#fff", textDecoration: "none" })}>
          About
        </NavLink>
        <NavLink to="/books" style={({ isActive }) => ({ color: isActive ? "#ffe082" : "#fff", textDecoration: "none" })}>
          All Books
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
