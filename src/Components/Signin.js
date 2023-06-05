import React from "react";
import { Formik } from "formik";
// import ReactDOM from 'react-dom';
function Signin() {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <Formik
          initialValues={{
            Email: " ",
            Password: " ",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.Email) {
              errors.Email = "Enter the Email ID";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.Email)
            ) {
              errors.Email = "Enter the proper Email ID";
            }
            if (!values.Password) {
              errors.Password = "Enter the Password";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert("form submitted succesfully");
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="Email">
                  <strong>Email</strong>
                </label>
                <input
                  type="Email"
                  name="Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Email}
                  className="form-control rounded-0"
                />
                {errors.Email && touched.Email}
                <span
                  className="text-danger"
                  style={{
                    color: "red",
                  }}
                >
                  {" "}
                  {errors.Email}{" "}
                </span>
              </div>
              <div className="mb-3">
                <label htmlFor="Password">
                  <strong>Password</strong>
                </label>
                <input
                  type="Password"
                  name="Password"
                  // placeholder="Enter the Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  //  value={values.Password}
                  className="form-control rounded-0"
                />
                {errors.Password && touched.Password}
                <span
                  className="text-danger"
                  style={{
                    color: "red",
                  }}
                >
                  {" "}
                  {errors.Password}{" "}
                </span>
              </div>
              <button type="submit" disabled={isSubmitting}>
                submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
export default Signin;
