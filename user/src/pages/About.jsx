// src/pages/About.jsx
const About = () => {
  return (
    <section style={{ maxWidth: "800px" }}>
      <h1 style={{ fontSize: "1.8rem", marginBottom: "0.75rem" }}>About This BookStore</h1>
      <p style={{ marginBottom: "0.75rem", color: "#4b5563" }}>
        This store curates practical programming and computer science books that help developers
        grow from fundamentals to advanced concepts.
      </p>
      <h2 style={{ fontSize: "1.3rem", marginTop: "1.25rem" }}>Why these books matter</h2>
      <ul style={{ marginTop: "0.5rem", color: "#4b5563" }}>
        <li>
          <strong>Clean Code</strong> and <strong>The Clean Coder</strong> focus on writing maintainable
          code and behaving professionally as a software engineer.
        </li>
        <li>
          <strong>The Pragmatic Programmer</strong> and <strong>Refactoring</strong> teach habits and
          techniques for evolving codebases safely over time.
        </li>
        <li>
          Algorithm and systems books like <strong>Introduction to Algorithms</strong> and
          <strong>Operating System Concepts</strong> build strong CS foundations that apply across
          languages and frameworks.
        </li>
      </ul>
    </section>
  );
};

export default About;
