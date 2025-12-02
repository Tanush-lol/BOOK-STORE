// src/components/BookCard.jsx
const BookCard = ({ book, showImage = true }) => {
  const placeholder = `https://picsum.photos/seed/${encodeURIComponent(book.title)}/300/180`;

  return (
    <div style={{ border: "1px solid #e5e7eb", borderRadius: "0.5rem", padding: "1rem", width: "260px", boxShadow: "0 2px 6px rgba(0,0,0,0.06)", background: "#fff" }}>
      {showImage && (
        <img
          src={placeholder}
          alt={book.title}
          style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "0.5rem", marginBottom: "0.75rem" }}
        />
      )}
      <h3 style={{ fontSize: "1.05rem", fontWeight: 600, marginBottom: "0.25rem" }}>{book.title}</h3>
      <p style={{ margin: 0, color: "#4b5563" }}>by {book.author}</p>
      <p style={{ margin: "0.25rem 0", color: "#6b7280", fontSize: "0.9rem" }}>Published: {book.publishedYear}</p>
      <p style={{ marginTop: "0.5rem", fontWeight: 600 }}>₹{book.price}</p>
    </div>
  );
};

export default BookCard;
