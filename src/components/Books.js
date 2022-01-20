import '../App.css';
import { useState } from 'react';
import BookItem from './BookItem';
import BookForm from './BookForm';

function Books() {
  const [books, setBooks] = useState([
    { id: 1, name: 'At The Mountains of Madness', author: 'H.P. Lovecraft' },
    { id: 2, name: 'História Social do Jazz', author: 'Eric J. Hobsbawn' },
    { id: 3, name: 'Daytripper', author: 'Fábio Moon' },
    { id: 4, name: 'Mitologia Japonesa', author: 'Carmen Seganfredo' },
    { id: 5, name: 'Musashi', author: 'Eiji Yoshikawa' },
  ]);

  const [showForm, setShowForm] = useState(false);

  function addBook() {
    setShowForm(!showForm);
  }

  return (
    <div className="container">
      <div className="list-header">
        <h3>Book List</h3>
        <span>
          <button
            onClick={() => addBook()}
            className={showForm ? 'btn-cancel' : 'btn-add'}
          >
            {showForm ? '-' : '+'}
          </button>
        </span>
      </div>

      {showForm && <BookForm books={books} setBooks={setBooks} />}

      <div>
        <ul>
          {books.map((book) => (
            <BookItem key={book.name} name={book.name} author={book.author} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Books;
