import clsx from "clsx";
import s from "./DisplayPassword.module.css";
import sprite from "../../img/sprite.svg";
import { useState } from "react";

export default function DisplayPassword({
  displayPassword,
  setDisplayPassword,
  number,
}) {
  const handlChange = (evt) => {
    setDisplayPassword(evt.target.checked);
  };

  return (
    <>
      <input
        className={s.input}
        id="theme"
        type="checkbox"
        onChange={handlChange}
        checked={displayPassword}
      />
      <label
        htmlFor="theme"
        className={clsx(number === 1 ? s.divInputnLogin : s.divInputnRegister)}
      >
        {displayPassword ? (
          <div>
            <svg className={s.icon}>
              <use href={`${sprite}#icon-eye`} />
            </svg>
          </div>
        ) : (
          <div>
            <svg className={s.icon}>
              <use href={`${sprite}#icon-eye-off`} />
            </svg>
          </div>
        )}
      </label>
    </>
  );
}
