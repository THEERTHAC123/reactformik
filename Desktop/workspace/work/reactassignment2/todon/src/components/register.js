import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './register.css';

export default function LoginForm() {
  const LoginFormSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Invalid email address'),
    firstname: Yup.string().required().min(5),
    pass: Yup.string()
      .min(8, 'Password must be 8 characters long')
      .matches(/[0-9]/, 'Password requires a number')
      .matches(/[a-z]/, 'Password requires a lowercase letter')
      .matches(/[^\w]/, 'Password requires a symbol'),
    confirm: Yup.string()
      .oneOf([Yup.ref('pass'), null], 'Must match "password" field value'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      firstname: '',
      pass: '',
      confirm: '',
    },
    validationSchema: LoginFormSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="container py-5 h-100">
      <div className="form">
        <div className="form-body">
          <div className="row col-12 d-flex justify-content-center text-white">
            <h3>Registration</h3>
          </div>

          <div className="email">
            <label className="form__label" htmlFor="email">
              Email
            </label>
            <br />
            <input
              type="email"
              id="email"
              className="form__input"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Email"
            />
            {formik.errors.email && formik.touched.email && (
              <p>{formik.errors.email}</p>
            )}
          </div>

          <div className="lastname">
            <label className="form__label" htmlFor="firstName">
              First Name
            </label>
            <br />
            <input
              type="text"
              id="firstname"
              value={formik.values.firstname}
              className="form__input"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="First Name"
            />
            {formik.errors.firstname && formik.touched.firstname && (
              <p>{formik.errors.firstname}</p>
            )}
          </div>

          <div className="password">
            <label className="form__label" htmlFor="password">
              Password
            </label>
            <br />
            <input
              className="form__input"
              type="password"
              id="pass"
              value={formik.values.pass}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Password"
            />
            {formik.errors.pass && formik.touched.pass && (
              <p>{formik.errors.pass}</p>
            )}
          </div>
          <div className="confirm-password">
            <label className="form__label" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <br />
            <input
              className="form__input"
              type="password"
              id="confirm"
              value={formik.values.confirm}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Confirm Password"
            />
            {formik.errors.confirm && formik.touched.confirm && (
              <p>{formik.errors.confirm}</p>
            )}
          </div>
        </div>
          <button onClick={formik.handleSubmit} type="submit" className="btn">
          Register
        </button>
      </div>
    </div>
  );
}


