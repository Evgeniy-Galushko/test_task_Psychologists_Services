import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import sprite from "../../img/sprite.svg";
import s from "./LogInModal.module.css";
import Modal from "react-modal";
import { blue } from "@mui/material/colors";
Modal.setAppElement("#root");

const customStyles = {
  overlay: {
    backgroundColor: "blue",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function LogInModal({ isOpen, closeModalLogin }) {
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
    console.log(values);
  };
  const initialValues = {
    email: "",
    password: "",
  };
  return (
    <Modal
      isOpen={isOpen}
      // onAfterOpen={afterOpenModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className={s.boxLogin}>
        <button
          type="button"
          className={s.buttonClose}
          onClick={closeModalLogin}
        >
          <svg className={s.iconClose}>
            <use href={`${sprite}#icon-close`} />
          </svg>
        </button>

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
                type="password"
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
    </Modal>
  );
}
