import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import UserData from "./UserData";
import "../../src/UserForm.css";

const UserForm = ({ touched, errors, status, values }) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    if (status) {
      setUserData([...userData, status]);
    }
  }, [status]);

  console.log(userData);

  return (
    <div className="user-container">
      <Form className="form-styling">
        <h1>User Form</h1>
        <Field
          className="input"
          type="text"
          name="name"
          placeholder="Name..."
        />
        {touched.name && errors.name && <p className="error">{errors.name}</p>}
        <Field
          className="input"
          type="email"
          name="email"
          placeholder="email@email.com"
        />
        {touched.email && errors.email && (
          <p className="error">{errors.email}</p>
        )}
        <Field
          className="input"
          type="password"
          name="password"
          placeholder="Password..."
        />
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}
        <label className="checkbox-container">
          <Field
            className="checkmark"
            type="checkbox"
            name="terms"
            checked={values.terms}
          />
          Please Agree To Terms
        </label>
        {touched.terms && errors.terms && (
          <p className="error">{errors.terms}</p>
        )}
        <button className="btn" type="submit">
          Submit
        </button>
      </Form>
      <UserData userData={userData} />
    </div>
  );
};

const FormikUserForm = withFormik({
  mapPropsToValues({ name, email, password, terms }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      terms: terms || ""
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Give Me Your Name !"),
    email: Yup.string().required("Give Me Your Email!"),
    password: Yup.string().required("Whisper Your Password!"),
    terms: Yup.bool().required()
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post(" https://reqres.in/api/users", values)
      .then(res => setStatus(res.data))
      .catch(err => console.log(err.response));
    resetForm();
  }
})(UserForm);

export default FormikUserForm;
