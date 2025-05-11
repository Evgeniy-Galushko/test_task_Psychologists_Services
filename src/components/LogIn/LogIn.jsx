import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import s from "./LogIn.module.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import DisplayPassword from "../DisplayPassword/DisplayPassword.jsx";
import { useState } from "react";

export default function LogIn({ closeModal }) {
  const [displayPassword, setDisplayPassword] = useState(false);
  const dispatch = useDispatch();

  const format = {
    email:
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    password:
      /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/,
  };

  const pattern = Yup.object().shape({
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
    signInWithEmailAndPassword(auth, values.email, values.password)
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
    email: "",
    password: "",
  };
  return (
    <div className={s.boxLogin}>
      <DisplayPassword
        displayPassword={displayPassword}
        setDisplayPassword={setDisplayPassword}
        number={1}
      />
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={pattern}
      >
        <Form>
          <h2 className={s.titleFomik}>Log In</h2>
          <p className={s.paragraphFomik}>
            Welcome back! Please enter your credentials to access your account
            and continue your search for a psychologist.
          </p>
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
              type={displayPassword ? "text" : "password"}
              placeholder="Password"
              className={s.input}
              required
            />
            <ErrorMessage name="password" component="span" />
          </div>
          <button type="submit" className={s.button}>
            Log In
          </button>
        </Form>
      </Formik>
    </div>
  );
}
