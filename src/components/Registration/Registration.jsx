import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import s from "./Registration.module.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";

export default function Registration({ closeModal }) {
  const dispatch = useDispatch();

  const format = {
    name: /^[а-яА-Яa-zA-Z0-9 ]{3,50}$/,
    email:
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    password:
      /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/,
  };

  const pattern = Yup.object().shape({
    name: Yup.string()
      .matches(format.name, "Name is required!")
      .required("Required"),
    email: Yup.string()
      .matches(format.email, "Too Short!")
      .required("Required"),
    password: Yup.string()
      .matches(
        format.password,
        "The password must contain: at least one number; !@#$%^&* - the string contains at least one special character; the string contains at least one lowercase Latin letter; the string contains at least one uppercase Latin letter; the string consists of at least 8 of the above-mentioned characters."
      )
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(console.log)
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });

    actions.resetForm();
    closeModal();
  };

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  return (
    <div className={s.boxRegistr}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={pattern}
      >
        <Form>
          <h2 className={s.titleFomik}>Registration</h2>
          <p className={s.paragraphFomik}>
            Thank you for your interest in our platform! In order to register,
            we need some information. Please provide us with the following
            information.
          </p>
          <div className={s.divName}>
            <Field
              name="name"
              type="text"
              placeholder="Name"
              className={s.input}
              required
            />
            <ErrorMessage name="email" component="span" />
          </div>
          <div className={s.divEmail}>
            <Field
              name="email"
              type="email"
              placeholder="Email"
              className={s.input}
              required
            />
            <ErrorMessage name="email" component="span" />
          </div>
          <div className={s.divPassword}>
            <Field
              name="password"
              type="password"
              placeholder="Password"
              className={s.input}
              required
            />
            <ErrorMessage name="password" component="span" />
          </div>
          <button type="submit" className={s.button}>
            Sign Up
          </button>
        </Form>
      </Formik>
    </div>
  );
}
