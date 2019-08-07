import React from "react";
import { Form, Field, withFormik } from "formik";

const UserForm = props => {
  return (
    <div>
      <h1>User Form</h1>
      <Form>
        <Field type="text" name="name" placeholder="Name..." />
        <Field type="email" name="email" placeholder="email@email.com" />
        <Field type="password" name="password" placeholder="Password..." />
        <Field type="checkbox" name="terms" placeholder="Terms of Service" />
        <submit>Submit</submit>
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
  }
})(UserForm);

export default FormikUserForm;
