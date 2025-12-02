// src/pages/Home.jsx
import { useBooks } from "../context/BookContext";
import BookCard from "../components/BookCard";

const Home = () => {
  const { books, loading, error } = useBooks();

  if (loading) return <p>Loading featured books...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  const shuffled = [...books].sort(() => 0.5 - Math.random());
  const featured = shuffled.slice(0, 6);

  return (
    <section>
      <h1>Featured Books</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {featured.map((b) => (
          <BookCard key={b._id} book={b} />
        ))}
      </div>
    </section>
  );
};

export default Home;
