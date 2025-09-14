import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [books, setBooks] = useState([
    { title: "1984", author: "George Orwell" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
  ]);

  const [search, setSearch] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");

  const handleAddBook = () => {
    if (!newTitle.trim() || !newAuthor.trim()) return;
    setBooks((prev) => [...prev, { title: newTitle.trim(), author: newAuthor.trim() }]);
    setNewTitle("");
    setNewAuthor("");
  };

  const handleRemoveBook = (index) => {
    setBooks((prev) => prev.filter((_, i) => i !== index));
  };

  const filteredBooks = books.filter(
    (b) =>
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-wrapper">
      <div className="library-box">
        <h1 className="lib-title">Library Management</h1>

        <input
          className="search-input"
          type="text"
          placeholder="Search by title or author"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="add-row">
          <input
            className="input-title"
            type="text"
            placeholder="New book title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <input
            className="input-author"
            type="text"
            placeholder="New book author"
            value={newAuthor}
            onChange={(e) => setNewAuthor(e.target.value)}
          />
          <button type="button" className="btn-add" onClick={handleAddBook}>
            Add Book
          </button>
        </div>

        <ul className="book-list">
          {filteredBooks.map((book, idx) => (
            <li key={idx} className="book-item">
              <div className="book-text">
                <span className="book-title">{book.title}</span>
                <span className="book-by">by</span>
                <span className="book-author">{book.author}</span>
              </div>
              <button
                type="button"
                className="btn-remove"
                onClick={() => handleRemoveBook(idx)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
