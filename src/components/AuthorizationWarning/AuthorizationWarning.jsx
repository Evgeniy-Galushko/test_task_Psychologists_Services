import s from "./AuthorizationWarning.module.css";

export default function AuthorizationWarning({
  onCloseLogin,
  onCloseRegister,
}) {
  return (
    <ul className={s.boxWarningAvt}>
      <li>
        <h2 className={s.title}>
          If you are already registered on our website, please click "Log In",
          if not, then "Registration"!
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
