// src/pages/AllBooks.jsx
import { useBooks } from "../context/BookContext";
import BookCard from "../components/BookCard";

const AllBooks = () => {
  const { books, loading, error } = useBooks();

  if (loading) return <p>Loading all books...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <section>
      <h1>All Books</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {books.map((b) => (
          <BookCard key={b._id} book={b} />
        ))}
      </div>
    </section>
  );
};

export default AllBooks;
