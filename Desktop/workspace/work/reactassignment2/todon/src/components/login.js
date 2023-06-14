import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './login.css';

export default function LoginForm() {
  const LoginFormSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Invalid email address'),
    password:Yup.string().required().min(5)
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password:'',
    },
    validationSchema: LoginFormSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="form">
      <div className="form-body">
        <div>
          <h2>Log in</h2>
          <label htmlFor="email">Email:</label><br />
          <input
            type="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email && (
            <p>{formik.errors.email}</p>
          )}
        </div>
        <div>
        <label htmlFor="password">Password:</label><br />
          <input
            type="password"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.password && formik.touched.password && (
            <p>{formik.errors.password}</p>
          )}
        </div>
        <button onClick={formik.handleSubmit}>Sign in</button>
      </div>
    </div>
  );
}