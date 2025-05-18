import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import s from "./MakeAnAppointment.module.css";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { selectDb } from "../../redux/slices/selectors.js";
import { useLocation, useParams } from "react-router-dom";

export default function MakeAnAppointment({ closeModal, appointmentBooking }) {
  const database = useSelector(selectDb);
  const { id } = useParams();

  const format = {
    name: /^[а-яА-Яa-zA-Z0-9 ]{3,50}$/,
    number: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
    email:
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
  };

  const pattern = Yup.object().shape({
    name: Yup.string()
      .matches(format.name, "Name is required!")
      .required("Required"),
    number: Yup.string()
      .matches(format.number, `The number is not correct "+380971234567"!`)
      .required("Required"),
    email: Yup.string()
      .matches(
        format.email,
        "The password must contain: at least one number; !@#$%^&* - the string contains at least one special character; the string contains at least one lowercase Latin letter; the string contains at least one uppercase Latin letter; the string consists of at least 8 of the above-mentioned characters."
      )
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    toast.success("You have made an appointment with a doctor!");
    actions.resetForm();
    closeModal();
  };

  const initialValues = {
    name: "",
    number: "",
    time: "",
    email: "",
    comment: "",
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
              <img
                src={appointmentBooking.avatar}
                alt={appointmentBooking.name}
                className={s.imgDoctor}
              />
            </li>
            <li>
              <p className={s.doctorParagraph}>Your psychologists</p>
              <h3 className={s.doctorName}>{appointmentBooking.name}</h3>
            </li>
          </ul>
          <div className={s.oneInputBox}>
            <Field
              name="name"
              type="text"
              placeholder="Name"
              className={s.input}
              required
            />
            <ErrorMessage name="name" component="span" />
          </div>
          <ul className={s.boxNumberTime}>
            <li>
              <Field
                name="number"
                type="tel"
                placeholder="+380"
                className={s.inputNumberTime}
                required
              />
              <ErrorMessage name="number" component="span" />
            </li>
            <li>
              <Field
                name="time"
                type="time"
                className={s.inputNumberTime}
                required
              />
              <ErrorMessage name="time" component="span" />
            </li>
          </ul>
          <div className={s.oneInputBox}>
            <Field
              name="email"
              type="email"
              placeholder="Email"
              className={s.input}
              required
            />
            <ErrorMessage name="email" component="span" />
          </div>
          <Field
            as="textarea"
            name="comment"
            placeholder="Comment"
            className={s.textarea}
            required
          />
          <button type="submit" className={s.button}>
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
}
