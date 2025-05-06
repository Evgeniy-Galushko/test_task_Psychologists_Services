import { useId } from "react";
import { Field, Form, Formik } from "formik";
import s from "./Filter.module.css";

export function Filter() {
  const filterId = useId();

  const initialValues = {
    filters: "",
  };

  // onSubmit = { handleSubmit };

  return (
    <section className={s.filter}>
      <Formik initialValues={initialValues}>
        <Form className={s.formFilter}>
          <div className={s.divBox}>
            <label htmlFor={filterId} className={s.labelBox}>
              Filters
            </label>
            <Field
              as="select"
              name="filters"
              id={filterId}
              className={s.boxSelect}
            >
              <option className={s.boxOption} value="A to Z">
                A to Z
              </option>
              <option className={s.boxOption} value="Z to A">
                Z to A
              </option>
              <option className={s.boxOption} value="Less than 10$">
                Less than 10$
              </option>
              <option className={s.boxOption} value="Greater than 10$">
                Greater than 10$
              </option>
              <option className={s.boxOption} value="Popular">
                Popular
              </option>
              <option className={s.boxOption} value="Not popular">
                Not popular
              </option>
              <option className={s.boxOption} value="Show all">
                Show all
              </option>
            </Field>
          </div>
        </Form>
      </Formik>
    </section>
  );
}
