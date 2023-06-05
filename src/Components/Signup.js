import React from "react";
import { Formik } from "formik";
function Signup() {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-2 rounded w-25">
        <h2 style={{ color: "green" }}>Register Here</h2>
        <Formik
          initialValues={{
            FirstName: "",
            LastName: "",
            PhoneNumber: "",
            Address: "",
            Email: "",
            Password: "",
            ConfirmPassword: ""
          }}
          validate={(values) => {
            const errors = {};
            if (!values.FirstName) {
              errors.FirstName = "Enter the First Name";
            }
            if (!values.LastName) {
              errors.LastName = "Enter the Last Name";
            }
            if (!values.PhoneNumber) {
              errors.PhoneNumber = "Enter the Phone Number";
            } else if (!/^(\+\d{1,3}[- ]?)?\d{10}$/i.test(values.PhoneNumber)) {
              errors.PhoneNumber = "Enter the Proper Phone Number";
            }
            if (!values.Email) {
              errors.Email = "Enter the Email";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.Email)
            ) {
              errors.Email = "Enter the proper email";
            }
           
            if (
              values.Password &&
              values.ConfirmPassword &&
              values.Password === values.ConfirmPassword
            ) {
              console.log(
                "Password is matched",
                values.Password,
                values.ConfirmPassword
              );
            } else {
              if (!values.Password) {
                errors.Password = "Enter the Password";
              }
              // } else if (!values.ConfirmPassword) {
              //   errors.Password = "Please enter the  password";
              // } 
              else if(values.Password.trim() !== values.ConfirmPassword.trim()){
                errors.ConfirmPassword = `Password not matched`;
              }
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
                <label htmlFor="FirstName">
                  <strong>First Name</strong>
                </label>
                <input
                  type="FirstName"
                  name="FirstName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.FirstName}
                  className="form-control rounded-0"
                />
                {errors.FirstName && touched.FirstName}
                <span
                  className="text-danger"
                  style={{
                    color: "red",
                  }}
                >
                  {" "}
                  {errors.FirstName}{" "}
                </span>
              </div>
              <div className="mb-3">
                <label htmlFor="LastName">
                  <strong>Last Name</strong>
                </label>
                <input
                  type="LastName"
                  name="LastName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.LastName}
                  className="form-control rounded-0"
                />
                {errors.LastName && touched.LastName}
                <span
                  className="text-danger"
                  style={{
                    color: "red",
                  }}
                >
                  {" "}
                  {errors.LastName}{" "}
                </span>
              </div>
              <div className="mb-3">
                <label htmlFor="PhoneNumber">
                  <strong>Phone Number</strong>
                </label>
                <input
                  type="PhoneNumber"
                  name="PhoneNumber"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.PhoneNumber}
                  className="form-control rounded-0"
                />
                {errors.PhoneNumber && touched.PhoneNumber}
                <span
                  className="text-danger"
                  style={{
                    color: "red",
                  }}
                >
                  {" "}
                  {errors.PhoneNumber}{" "}
                </span>
              </div>
              <div className="mb-3">
                <label htmlFor="Address">
                  <strong>Address</strong>
                </label>
                <input
                  type="Address"
                  name="Address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Address}
                  className="form-control rounded-0"
                />
                {errors.Address && touched.Address}
                <span
                  className="text-danger"
                  style={{
                    color: "red",
                  }}
                >
                  {" "}
                  {errors.Address}{" "}
                </span>
              </div>
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
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Password}
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
              <div className="mb-3">
                <label htmlFor="ConfirmPassword">
                  <strong>Confirm Password</strong>
                </label>
                <input
                  type="ConfirmPassword"
                  name="ConfirmPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.ConfirmPassword}
                  className="form-control rounded-0"
                />
                {errors.ConfirmPassword && touched.ConfirmPassword}
                <span
                  className="text-danger"
                  style={{
                    color: "red",
                  }}
                >
                  {" "}
                  {errors.ConfirmPassword}{" "}
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
export default Signup;