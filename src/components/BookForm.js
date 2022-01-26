import '../App.css';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

function BookForm(props) {
  // const [name, setName] = useState();
  // const [author, setAuthor] = useState();
  const { books, setBooks } = props;

  const schema = yup.object({
    name: yup
      .string()
      .required('O campo Nome é obrigatório!!!')
      .min(3, 'O campo Nome deve conter pelo menos 3 caracteres!!!')
      .max(30, 'O campo Nome deve ter no máximo 30 caracteres!!!'),

    author: yup
      .string()
      .required('O campo Author é obrigatório')
      .min(3, 'O campo Author deve conter pelo menos 3 caracteres!!!'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      author: '',
    },
    validationSchema: schema,
    onSubmit: (values, { resetForm }) => {
      // addBook()
      const { name, author } = values;
      const newBook = { id: Math.random(), name, author };
      setBooks([newBook, ...books]);
      resetForm({ values: '' });
    },
    onReset: (values) => {
      values.name = '';
      values.author = '';
    },
  });

  // function addBook() {
  //   const newBook = { id: Math.random(), name, author };
  //   setBooks([newBook, ...books]);
  // }

  return (
    <div className="form-container">
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ marginBottom: '.5rem', color: '#fff', fontSize: '2rem' }}>
          Book Add
        </h4>
      </div>

      <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name..."
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {/* {error && <span className="message-error">{formik.errors.name}</span>} */}
        {formik.errors.name && (
          <span className="message-error">{formik.errors.name}</span>
        )}

        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          name="author"
          placeholder="Author..."
          value={formik.values.author}
          onChange={formik.handleChange}
        />
        {/* {error && <span className="message-error">Inválid</span>} */}
        {formik.errors.author && (
          <span className="message-error">{formik.errors.author}</span>
        )}

        <button
          type="submit"
          className="btn-register"
          // disabled={formik.values.name && formik.values.author ? false : true}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default BookForm;
