import '../App.css';
import { useState } from 'react';

function BookForm(props) {
  const [name, setName] = useState();
  const [author, setAuthor] = useState();
  const { books, setBooks } = props;

  function addBook() {
    const newBook = { id: Math.random(), name, author };
    setBooks([newBook, ...books]);
  }

  function onSubmit(e) {
    addBook();
    e.preventDefault();
  }

  return (
    <div className="form-container">
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ marginBottom: '.5rem', color: '#fff', fontSize: '2rem' }}>
          Book Add
        </h4>
      </div>

      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name..."
          style={{ marginBottom: '1.3rem' }}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          name="author"
          placeholder="Author..."
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button
          type="submit"
          className="btn-register"
          disabled={name && author ? false : true}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default BookForm;
