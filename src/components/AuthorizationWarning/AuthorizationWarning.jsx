import s from "./AuthorizationWarning.module.css";
import Auth from "../Auth/Auth.jsx";

export default function AuthorizationWarning({
  onCloseLogin,
  onCloseRegister,
}) {
  return (
    <ul className={s.boxWarningAvt}>
      <li>
        <h2 className={s.title}>
          If you are already registered on our website, please "Login", if not
          then "Register"!
        </h2>
      </li>
      <li className={s.boxButton}>
        <button className={s.buttonLogin} type="button" onClick={onCloseLogin}>
          log In
        </button>
        <button
          className={s.buttonRegistration}
          type="button"
          onClick={onCloseRegister}
        >
          Registration
        </button>
      </li>
    </ul>
  );
}
