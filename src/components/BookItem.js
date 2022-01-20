import '../App.css';

function BookItem({ name, author }) {
  return (
    <li>
      <div className="content">
        <h4>{name}</h4>
        <p>{author}</p>
      </div>
    </li>
  );
}

export default BookItem;
