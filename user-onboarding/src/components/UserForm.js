import React from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

const UserForm = ({ touched, errors }) => {
  return (
    <div>
      <h1>User Form</h1>
      <Form>
        <Field type="text" name="name" placeholder="Name..." />
        {touched.name && errors.name && <p>{errors.name}</p>}
        <Field type="email" name="email" placeholder="email@email.com" />
        {touched.email && errors.email && <p>{errors.email}</p>}
        <Field type="password" name="password" placeholder="Password..." />
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field type="checkbox" name="terms" placeholder="Terms of Service" />
        {touched.terms && errors.terms && <p>{errors.terms}</p>}
        <button type="submit">Submit</button>
      </Form>
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
    name: Yup.string().required(),
    email: Yup.string().required(),
    password: Yup.string().required(),
    terms: Yup.bool().required()
  }),
  handleSubmit(values) {
    console.log(values);
  }
})(UserForm);

export default FormikUserForm;
