import React from 'react';
import { useFormik } from 'formik';
import './post.css';

export function AddPost() {
  const formik = useFormik({
    initialValues: {
      title: '',
      content: '',
    },
    validate: (values) => {
      const errors = {};
  
      if (!values.title) {
        errors.title = 'Title is required';
      } else if (values.title.length < 5) {
        errors.title = 'Title must be at least 5 characters long';
      }
  
      if (!values.content) {
        errors.content = 'Content is required';
      } else if (values.content.length > 3000) {
        errors.content = 'Content must be less than or equal to 3000 characters';
      }
  
      return errors;
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  

  return (
    <div className="form">
      <div className="form-body">
        <form onSubmit={formik.handleSubmit}>
          <h2>Add Post</h2>
          <div>
            <label htmlFor="title">Title</label><br /><br />
            <input
              type="text"
              id="title"
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
            />
            {formik.errors.title && formik.touched.title && (
              <div className="error">{formik.errors.title}</div>
            )}
          </div><br />
          <div>
            <label htmlFor="content">Content</label><br />
            <textarea
              id="content"
              name="content"
              rows="6"
              cols="28"
              value={formik.values.content}
              onChange={formik.handleChange}
            />
            {formik.errors.content && formik.touched.content && (
              <div className="error">{formik.errors.content}</div>
            )}
          </div><br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AddPost;
