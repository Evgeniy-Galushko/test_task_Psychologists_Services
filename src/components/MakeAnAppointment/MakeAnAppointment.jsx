import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import s from "./MakeAnAppointment.module.css";

export default function MakeAnAppointment({ closeModal, avatar, name }) {
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
    <div className={s.boxAppointment}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={pattern}
      >
        <Form>
          <h2 className={s.titleFomik}>
            Make an appointment with a psychologists
          </h2>
          <p className={s.paragraphFomik}>
            You are on the verge of changing your life for the better. Fill out
            the short form below to book your personal appointment with a
            professional psychologist. We guarantee confidentiality and respect
            for your privacy.
          </p>
          <ul className={s.boxDoctor}>
            <li>
              <img src={avatar} alt={name} className={s.imgDoctor} />
            </li>
            <li>
              <p className={s.doctorParagraph}>Your psychologists</p>
              <h3 className={s.doctorName}>{name}</h3>
            </li>
          </ul>
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
          <button type="submit" className={s.button} onClick={closeModal}>
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
}
