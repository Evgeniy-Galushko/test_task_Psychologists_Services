import { useId } from "react";
import { Field, Form, Formik } from "formik";
import s from "./Filter.module.css";

export function Filter({ onChange }) {
  const filterId = useId();

  return (
    <section className={s.sectionBox}>
      <label htmlFor={filterId} className={s.labelBox}>
        Filters
      </label>
      <select
        name="filters"
        id={filterId}
        className={s.boxSelect}
        onChange={onChange}
      >
        <option className={s.boxOption} value="ShowAll">
          Show all
        </option>
        <option className={s.boxOption} value="alphabetically">
          A to Z
        </option>
        <option className={s.boxOption} value="inReverseOrder">
          Z to A
        </option>
        <option className={s.boxOption} value="fromALowerPrice">
          Less than 10$
        </option>
        <option className={s.boxOption} value="fromHigherPrice">
          Greater than 10$
        </option>
        <option className={s.boxOption} value="Popular">
          Popular
        </option>
        <option className={s.boxOption} value="NotPopular">
          Not popular
        </option>
      </select>
    </section>
  );
}
